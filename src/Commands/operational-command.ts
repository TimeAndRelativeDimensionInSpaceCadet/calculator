import { Command } from "../Interfaces/command";

export class OperationalCommand implements Command {
    private operatorPayload: string;
    constructor(payload: string, handler: Function){
        this.operatorPayload = payload;
    }
    execute(){

    }
}