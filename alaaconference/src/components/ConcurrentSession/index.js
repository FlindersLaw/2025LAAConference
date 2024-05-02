// Component for displaying a concurrent session
// Will display a title, author(s) and a padlet button
import React from "react";
import { LearnButton } from "@site/src/components/EOIButton";
import styles from './ConcurrentSession.modules.css';
import {sessionData, sessionStreams, emptyKey} from './sessionData';

export function ConcurrentSession({sessionID, title, presenters}) {
    // Both title and presenters are strings
    return (
        <td>
            <div className={styles.csEntryTitle}>
                {sessionID}: {title}
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

export function CSRow({sessionKeys}) {
    return (
        <>
            <tr>
                {sessionKeys.map((sKey, index) => (
                    <td>
                        <ConcurrentSession
                            sessionID={sKey.substring(2)}
                            title={sessionData[sKey].title}
                            presenters={sessionData[sKey].presenters} />
                    </td>
                ))}
            </tr>
            <tr>
                    {sessionKeys.map((session, index) => (
                        <td>
                            <LearnButton learnURL={session.learnURL} />
                        </td>
                    ))}
            </tr>
        </>
    )
}

export function DisplaySessionsWithIDs({sessionIDList}) {
    // sessionIDList should be eg ['1', '2', '3', '4'] 
    // Assume the streams are always ['A', 'B', 'C']
    // Have a sanity check in case we can't find the key

    const sessionRows = sessionIDList.map(sID => {
        let sessionRow = [];        // Contains the list of sessions to be passed to CSRow()
        sessionStreams.forEach(key => {
            let streamKey = `id${sID}${key}`;
            console.log(streamKey);
            if ( sessionData[streamKey] ) {
                sessionRow.push(streamKey);
            } else {
                sessionRow.push(emptyKey);
            }
        });
        return <CSRow sessionKeys={sessionRow} key={sID} />
    });
    
    return (
        <>
            {sessionRows}
        </>
    )
}