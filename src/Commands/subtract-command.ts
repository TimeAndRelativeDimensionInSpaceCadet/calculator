import { Dispatch } from "react";
import { Command } from "../Interfaces/command";
import { CalculatorAction, EquationState } from "../Hooks/useCalculatorState";

export class SubtractCommand implements Command {
    private stateHandler: Dispatch<CalculatorAction>;
    constructor(handler: Dispatch<CalculatorAction>){
       this.stateHandler = handler; 
    }

    private doSubtraction = (left: number, right: number) => left - right;

    execute = () => {
        
    }

    
}