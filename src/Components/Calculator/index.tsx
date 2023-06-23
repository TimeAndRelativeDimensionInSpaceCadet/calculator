import { FunctionComponent, useState, useCallback } from "react";
import { CalculatorDisplay } from '../Screen/index';
import { CalculatorBody } from "../CalculatorBody";
import { ButtonPanel } from "../ButtonPanel";
import { basicLayout } from "../ButtonPanel/layouts";
import { NumericalCommand } from '../../Commands/numerical-command';
//import { OperationalCommand } from "../../Commands/operational-command";
import { Command } from "../../Interfaces/command";

export const Calculator: FunctionComponent = () => {
    const [ currentEntryState, setCurrentEntry ] = useState(0);
    //const [ equationState, setEquationState ] = useState({});

    const renderButtonLayoutWithCommands = useCallback(() => {
        return basicLayout.map(({text, commandType}) => ({
            text,
            command: determineCommand(commandType, text),
        }))
    }, []);

    const determineCommand = (type: string, text: string): Command => {
        switch(type){
            case 'number':
                return new NumericalCommand(parseInt(text), setCurrentEntry);
            default:
                return { execute: () => {} };
        }
    }
    return(
        <CalculatorBody>
            <CalculatorDisplay displayInput={currentEntryState.toString()} />
            <ButtonPanel buttonLayout={renderButtonLayoutWithCommands()} />
        </CalculatorBody>
    )
}