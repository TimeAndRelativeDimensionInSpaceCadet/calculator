import { FunctionComponent } from "react";
import styles from './index.module.scss';


type ScreenProps = {
    displayInput?: string; 
}

export const CalculatorDisplay: FunctionComponent<ScreenProps> = ({displayInput = "" }) => {

    return(
        <div className={styles.calcDisplay} >{displayInput}</div>
    )
}