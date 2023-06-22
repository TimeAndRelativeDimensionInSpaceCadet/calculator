import { Command } from "../Interfaces/command";

export class NumericalCommand implements Command {
    private numberPayload: number;
    private handler: Function
    constructor(payload: number, handler: Function){
        this.numberPayload = payload;
        this.handler = handler;
    }
    execute(){
        this.handler((e: number) => {
            const currentNum = e.toString();
            return parseInt(`${currentNum}${this.numberPayload}`);
        })
    }
}