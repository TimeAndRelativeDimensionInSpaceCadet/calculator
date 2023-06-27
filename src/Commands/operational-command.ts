import { Dispatch } from "react";
import { Command } from "../Interfaces/command";
import { DispatchAction } from "../Hooks/useCalculatorState";

export class OperationalCommand implements Command {
    private operatorPayload: string;
    private stateHandler: Dispatch<DispatchAction>;
    constructor(payload: string, handler: Dispatch<DispatchAction>){
        this.operatorPayload = payload;
        this.stateHandler = handler;
    }

    execute(){

    }

    
}