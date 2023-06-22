import { Command } from "../Interfaces/command";

export class NumericalCommand implements Command {
    private numberPayload: number;
    constructor(payload: number){
        this.numberPayload = payload;
    }
    execute(){

    }
}