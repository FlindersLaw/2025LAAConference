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

// Prints the table row for a list of sessions.  
// Assume we have three sessions per row.
// The first row contains:
// - session identifier
// - session title
// - link to abstract
// - session presenter(s)
// The second row contains a link to the padlet for this session

export function CSRow({sessions}) {
    // sessions should contain:
    // - title
    // - presenters
    // - abstractURL
    // - learnURL
    return (
        <>
            <tr>
                {sessions.map((session, index) => (
                    <td>
                        <ConcurrentSession
                            title={session.title}
                            presenters={session.presenters} />
                    </td>
                ))}
            </tr>
            <tr>
                    {sessions.map((session, index) => (
                        <td>
                            <LearnButton learnURL={session.learnURL} />
                        </td>
                    ))}
            </tr>
        </>
    )
}

const morning_session = ['1', '2', '3', '4'];
const streams = ['A', 'B', 'C'];

export function DisplayConcurrentSession() {
    const display_sessions = []
    streams.forEach(stream => {


    })

    
}