import { Command } from "../Interfaces/command";

export class ModifierCommand implements Command {
    private modifierPayload: string;
    constructor(payload: string){
        this.modifierPayload = payload;
    }
    execute(){

    }
}