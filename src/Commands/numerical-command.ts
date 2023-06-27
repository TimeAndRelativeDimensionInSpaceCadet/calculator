import { Dispatch } from 'react';
import { Command } from '../Interfaces/command';
import {
  CalculatorActionType,
  DispatchAction,
  createAction,
} from '../Hooks/useCalculatorState';

export class NumericalCommand implements Command {
  private numberPayload: number;
  private handler: Dispatch<DispatchAction>;

  constructor(payload: number, handler: Dispatch<DispatchAction>) {
    this.numberPayload = payload;
    this.handler = handler;
  }

  execute() {
    this.handler((dispatch, getState) => {
      const { currentEntry } = getState();
      const currentNum = currentEntry.toString().replace(/,/g, '');
      const result =
        currentNum === '0'
          ? `${this.numberPayload}`
          : `${currentNum}${this.numberPayload}`;

      dispatch(createAction(result, CalculatorActionType.NUMBER_ENTRY));
    });
  }
}
