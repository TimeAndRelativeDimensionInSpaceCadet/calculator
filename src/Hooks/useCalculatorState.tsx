import { useReducer, useCallback, Dispatch } from 'react';

export enum CalculatorActionType {
  DELETE,
  CLEAR,
  CLEAR_LAST,
  NUMBER_ENTRY,
  OPERATOR,
  EXECUTE,
}



export type EquationState = {
  operator: OperatorMap;
  leftOperand: string;
  rightOperand: string;
};

export enum OperatorMap {
  NONE = '',
  SUBTRACTION = '-',
  ADDITION = '+',
  MULTIPLICATION = '*',
  DIVISION = '/',
  SQRT = 'sqrt()',
  SQRD = '^2',
}

export type CalculatorAction = {
  payload: string;
  type: CalculatorActionType;
};

export type CalculatorState = {  
    currentEntry: string;
    equationState?: EquationState;
};

export type DispatchAction = (
  dispatch: Dispatch<CalculatorAction>,
  getState: () => CalculatorState
) => void;

export const createAction = (
  payload: string,
  actionType: CalculatorActionType
) => {
  return {
    payload,
    type: actionType,
  };
};

export const useCalculatorState = (initialState: string) => {
  const reducer = (
    prevState: CalculatorState,
    { type, payload }: CalculatorAction
  ) => {
    switch (type) {
      case CalculatorActionType.DELETE:
        return {
          ...prevState,
          currentEntry: payload,
        };
      case CalculatorActionType.NUMBER_ENTRY:
        return {
          ...prevState,
          currentEntry: payload,
        };
    }
    return prevState;
  };

  const [state, dispatch] = useReducer(reducer, {
    currentEntry: initialState,
  } as CalculatorState);

  const getState = useCallback(() => state, [state]);

  const augmentedDispatch: Dispatch<DispatchAction> = useCallback(
    (action: DispatchAction) => action(dispatch, getState),
    [getState]
  );

  return {
    state,
    dispatch,
    augmentedDispatch,
  };
};
