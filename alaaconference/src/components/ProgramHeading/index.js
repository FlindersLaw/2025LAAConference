// Displays the day's heading at the top of the program.
// Turned this into a component so I can include the Padlet button
import React from "react";
import styles from './ProgramHeading.modules.css';
import { ProgramHeadingButton } from "@site/src/components/EOIButton";

export const ECADayPadlet = 'https://padlet.com/ferr0182/alaa-2024-conference-eca-day-gybx8w4fijnr77x1';
export const ConferencePadlet = 'https://padlet.com/ferr0182/alaa-2024-conference-mdjb79253jraj1xa';

export function ProgramHeading({ECADay, children}) {
    // If ECADay is set then display the ECA day padlet.  Otherwise
    // display the regular padlet
    let buttonURL = ConferencePadlet;
    if ( ECADay ) {
        buttonURL = ECADayPadlet;
    }
    return (
        <div className={styles.ProgramHeading}>
            <div className={styles.ProgramHeadingDay}>
                {children}
            </div>
            <div className={styles.ProgramHeadingButton} >
                <ProgramHeadingButton URL={buttonURL} />
            </div>
        </div>
    );
}

export default ProgramHeading;