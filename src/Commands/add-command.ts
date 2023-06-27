import { Dispatch } from "react";
import { Command } from "../Interfaces/command";
import { CalculatorAction, DispatchAction } from "../Hooks/useCalculatorState";

export class SubtractCommand implements Command {
    private operandsPayload: string[];
    private stateHandler: Dispatch<CalculatorAction>;
    constructor(payload: string[], handler: Dispatch<CalculatorAction>){
       this.stateHandler = handler; 
        this.operandsPayload = payload;
    }

    private doSubtraction = (left: number, right: number) => left - right;

    execute = () => {
        
    }

    
}