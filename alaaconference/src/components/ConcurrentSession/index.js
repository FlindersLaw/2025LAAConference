// Component for displaying a concurrent session
// Will display a title, author(s) and a padlet button
import React from "react";
import { LearnButton } from "@site/src/components/EOIButton";
import styles from './ConcurrentSession.modules.css';

export function ConcurrentSession({title, presenters}) {
    // Both title and presenters are strings
    return (
        <td>
            <div className={styles.csEntryTitle}>
                {title}
            </div>
            <div className={styles.csEntryPresenters}>
                {presenters}
            </div>
        </td>
    )

}

