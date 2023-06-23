import { Command } from "../Interfaces/command";

export class DeleteCommand implements Command {
    private modifierPayload: string;
    constructor(payload: string){
        this.modifierPayload = payload;
    }
    execute(){

    }
}