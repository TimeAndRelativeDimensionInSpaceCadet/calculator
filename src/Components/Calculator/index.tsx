import { FunctionComponent, useState, useCallback } from "react";
import { CalculatorDisplay } from '../Screen/index';
import { CalculatorBody } from "../CalculatorBody";
import { ButtonPanel } from "../ButtonPanel";
import { basicLayout } from "../ButtonPanel/layouts";
import { NumericalCommand } from '../../Commands/numerical-command';
import { OperationalCommand } from "../../Commands/operational-command";

export const Calculator: FunctionComponent = () => {
    const [ currentEntryState, setCurrentEntry ] = useState(0);
    const [ equationState, setEquationState ] = useState({});

    const renderButtonLayoutWithCommands = useCallback(() => {
        return basicLayout.map(({text, commandType}) => ({
            text,
            command: commandType === "number"
                ? new NumericalCommand(parseInt(text), setCurrentEntry)
                : new OperationalCommand(text, setEquationState)
        }))
    }, [basicLayout, setCurrentEntry, setEquationState])
    return(
        <CalculatorBody>
            <CalculatorDisplay displayInput={currentEntryState.toString()} />
            <ButtonPanel buttonLayout={renderButtonLayoutWithCommands()} />
        </CalculatorBody>
    )
}