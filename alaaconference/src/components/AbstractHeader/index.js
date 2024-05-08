import React from "react";
import {sessionData} from '@site/src/components/ConcurrentSession/sessionData';
import {LearnButton} from '@site/src/components/EOIButton';
import styles from '@site/src/components/ConcurrentSession/ConcurrentSession.modules.css';

export function AbstractHeader({sKey, children})
{
    return (
        <>
            <h1>
                {sessionData[sKey].title}
            </h1>
            <div className={styles.csContainer}>
                <div className={styles.csSessionNormal}>
                    {children}
                </div>
                <div className={styles.csLearnButton}>
                    <LearnButton learnURL={sessionData[sKey].learnURL} />
                </div>
            </div>
        </>
    )
}