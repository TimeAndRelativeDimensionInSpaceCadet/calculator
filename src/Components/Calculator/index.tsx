import { FunctionComponent } from "react";
import { CalculatorDisplay } from '../Screen/index';
import { CalculatorBody } from "../CalculatorBody";
import { ButtonPanel } from "../ButtonPanel";
import { basicLayout } from "../ButtonPanel/layouts";

export const Calculator: FunctionComponent = () => {
    return(
        <CalculatorBody>
            <CalculatorDisplay />
            <ButtonPanel buttonLayout={basicLayout} />
        </CalculatorBody>
    )
}