import calculatorSlice from '../redux/actions/calculatorActions'
import { configureStore , combineReducers} from '@reduxjs/toolkit';

// Define your root reducer by combining all the reducers you have
const rootReducer = combineReducers({
  calculator: calculatorSlice, // Add other reducers if needed
});

// Define the RootState type based on the root reducer
export type RootState = ReturnType<typeof rootReducer>;



const store = configureStore({
    reducer: {
      calculator: calculatorSlice, // Add other reducers if needed
    },
  });
  
  export default store;