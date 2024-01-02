import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView ,Switch } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import {myColors} from './src/styles/Colors'
import MyKeyboard from './src/components/MyKeyBoard';
import {Styles} from './src/styles/GlobalStyles'
import {Provider} from 'react-redux'
import store from './src/redux/store';

export default function App() {
  const [theme, setTheme] = useState('light')
  return (
    <Provider store= {store}>
    <ThemeContext.Provider value = {theme}>
    <SafeAreaView style={theme === 'light' ? Styles.container : [Styles.container, {backgroundColor: myColors.black}]}>
      <StatusBar style="auto" />
      <Switch value = {theme === 'light'}
      onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <MyKeyboard />
    </SafeAreaView>
    </ThemeContext.Provider>
    </Provider>
   
  );
}

