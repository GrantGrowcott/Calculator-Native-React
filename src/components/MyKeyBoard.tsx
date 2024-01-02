import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";
import { useSelector, useDispatch } from 'react-redux';
import {
  setFirstNumber,
  setSecondNumber,
  setOperation,
  setResult,
} from '../redux/actions/calculatorActions';
import { RootState } from '../redux/store';


export default function MyKeyboard() {
  const calculator = useSelector((state:RootState) => state.calculator);

  const dispatch = useDispatch();
  const { firstNumber, secondNumber, operation, result } = calculator;

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      dispatch(setFirstNumber(firstNumber + buttonValue));
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    dispatch(setOperation(buttonValue));
    dispatch(setSecondNumber(firstNumber));
    dispatch(setFirstNumber(''));
  };

  const clear = () => {
    dispatch(setFirstNumber(''));
    dispatch(setSecondNumber(''));
    dispatch(setOperation(''));
    dispatch(setResult(null));
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      const resultValue = Math.abs(result);
      if (resultValue < 99999) {
        return (
          <Text style={[Styles.screenFirstNumber, { color: myColors.result }]}>
            {resultValue.toString()}
          </Text>
        );
      } else {
        return (
          <Text
            style={[
              Styles.screenFirstNumber,
              { fontSize: 50, color: myColors.result },
            ]}
          >
            {resultValue.toString()}
          </Text>
        );
      }
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === '') {
      return <Text style={Styles.screenFirstNumber}>{result}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

  const getResult = () => {
    switch (operation) {
      case '+':
        clear();
        dispatch(setResult(parseInt(secondNumber) + parseInt(firstNumber)));
        break;
      case '-':
        clear();
        dispatch(setResult(parseInt(secondNumber) - parseInt(firstNumber)));
        break;
      case '*':
        clear();
        dispatch(setResult(parseInt(secondNumber) * parseInt(firstNumber)));
        break;
      case '/':
        clear();
        dispatch(setResult(parseInt(secondNumber) / parseInt(firstNumber)));
        break;
      default:
        clear();
        dispatch(setResult(0));
        break;
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={Styles.viewEntry}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        <Button title="C" isGray onPress={clear} />
        <Button title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
        <Button title="％" isGray onPress={() => handleOperationPress("％")} />
        <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="×" isBlue onPress={() => handleOperationPress("*")} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
        <Button title="=" isBlue onPress={() => getResult()} />
      </View>
    </View>
  );
}





  