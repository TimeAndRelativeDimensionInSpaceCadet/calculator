import { Command } from "../Interfaces/command";

export class OperationalCommand implements Command {
    private numberPayload: number;
    constructor(payload: number){
        this.numberPayload = payload;
    }
    execute(){

    }
}