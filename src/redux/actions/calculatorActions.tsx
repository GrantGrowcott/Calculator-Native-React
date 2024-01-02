import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  firstNumber: string;
  secondNumber: string;
  operation: string;
  result: number | null;
}

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    firstNumber: '',
    secondNumber: '',
    operation: '',
    result: null,
  } as CalculatorState,
  reducers: {
    setFirstNumber: (state, action: PayloadAction<string>) => {
      state.firstNumber = action.payload;
    },
    setSecondNumber: (state, action: PayloadAction<string>) => {
      state.secondNumber = action.payload;
    },
    setOperation: (state, action: PayloadAction<string>) => {
      state.operation = action.payload;
    },
    setResult: (state, action: PayloadAction<number | null>) => {
      state.result = action.payload;
    },
    clear: (state) => {
      state.firstNumber = '';
      state.secondNumber = '';
      state.operation = '';
      state.result = null;
    },
  },
});

export const {
  setFirstNumber,
  setSecondNumber,
  setOperation,
  setResult,
  clear,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;


