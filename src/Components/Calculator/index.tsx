import { FunctionComponent, /* useState, */ useCallback } from "react";
import { CalculatorDisplay } from '../Screen/index';
import { CalculatorBody } from "../CalculatorBody";
import { ButtonPanel } from "../ButtonPanel";
import { basicLayout } from "../ButtonPanel/layouts";
import { NumericalCommand } from '../../Commands/numerical-command';
//import { OperationalCommand } from "../../Commands/operational-command";
import { Command } from "../../Interfaces/command";
import { DeleteCommand } from "../../Commands/del-command";
import { useCalculatorState } from "../../Hooks/useCalculatorState";

export const Calculator: FunctionComponent = () => {
    //const [ currentEntryState, setCurrentEntry ] = useState("0");
    const { state: { currentEntry }, augmentedDispatch } = useCalculatorState("0");
    //const [ equationState, setEquationState ] = useState({});
    
    const determineCommand = useCallback((type: string, text: string): Command => {
        switch(type){
            case 'number':
                return new NumericalCommand(parseInt(text), augmentedDispatch);
            case 'delete':
                return new DeleteCommand(augmentedDispatch);
            default:
                return { execute: () => {} };
        }
    }, [augmentedDispatch])
    const renderButtonLayoutWithCommands = useCallback(() => {
        return basicLayout.map(({text, commandType}) => ({
            text,
            command: determineCommand(commandType, text),
        }))
    }, [determineCommand]);

    
    return(
        <CalculatorBody>
            <CalculatorDisplay displayInput={currentEntry} />
            <ButtonPanel buttonLayout={renderButtonLayoutWithCommands()} />
        </CalculatorBody>
    )
}