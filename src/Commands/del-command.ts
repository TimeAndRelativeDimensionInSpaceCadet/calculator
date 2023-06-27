import { Dispatch } from 'react';
import {
  CalculatorActionType,
  DispatchAction,
} from '../Hooks/useCalculatorState';
import { Command } from '../Interfaces/command';

export class DeleteCommand implements Command {
  private stateHandler: Dispatch<DispatchAction>;
  constructor(stateHandler: Dispatch<DispatchAction>) {
    this.stateHandler = stateHandler;
  }
  execute() {
    this.stateHandler((dispatch, getState) => {
      const { currentEntry } = getState();
      const currentNum = currentEntry.replace(/,/g, '');
      const updatedValue = currentNum.slice(0, currentNum.length - 1);
      const payload = updatedValue.length > 0 ? updatedValue : '0';
      dispatch({ type: CalculatorActionType.DELETE, payload });
    });
    /* this.stateHandler((e: number) => {
      const currentNum = e.toString().replace(/,/g, '');
      const updatedValue = currentNum.slice(0, currentNum.length - 1);
      return updatedValue.length > 0
        ? Intl.NumberFormat().format(parseInt(updatedValue))
        : '0';
    }); */
  }
}
