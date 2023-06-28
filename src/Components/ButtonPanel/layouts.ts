import { OperatorMap } from '../../Hooks/useCalculatorState';

export const basicLayout = [
  {
    text: '%',
    commandType: 'number',
  },
  {
    text: 'CE',
    commandType: 'number',
  },
  {
    text: 'C',
    commandType: 'number',
  },
  {
    text: '⌫',
    commandType: 'delete',
  },
  {
    text: '¹/ⲭ',
    commandType: 'number',
  },
  {
    text: 'ⲭ²',
    commandType: 'number',
  },
  {
    text: '²√ⲭ',
    commandType: 'number',
  },
  {
    text: '/',
    commandType: 'operator',
    operatorType: OperatorMap.DIVISION,
  },
  {
    text: '7',
    commandType: 'number',
  },
  {
    text: '8',
    commandType: 'number',
  },
  {
    text: '9',
    commandType: 'number',
  },
  {
    text: '×',
    commandType: 'operator',
    operatorType: OperatorMap.MULTIPLICATION,
  },
  {
    text: '4',
    commandType: 'number',
  },
  {
    text: '5',
    commandType: 'number',
  },
  {
    text: '6',
    commandType: 'number',
  },
  {
    text: '-',
    commandType: 'operator',
    operatorType: OperatorMap.SUBTRACTION,
  },
  {
    text: '1',
    commandType: 'number',
  },
  {
    text: '2',
    commandType: 'number',
  },
  {
    text: '3',
    commandType: 'number',
  },
  {
    text: '+',
    commandType: 'operator',
  },
  {
    text: '+/-',
    commandType: 'modifier',
  },
  {
    text: '0',
    commandType: 'number',
  },
  {
    text: '.',
    commandType: 'number',
  },
  {
    text: '=',
    commandType: 'operator',
  },
];
