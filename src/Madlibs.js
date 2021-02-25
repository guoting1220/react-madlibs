import React, { useState } from 'react';
import MadlibsForm from './MadlibsForm';

const Madlibs = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);

    const collectData = (data) => {
        setSubmittedData(data);
        setIsSubmitted(true);
    }

    const restart = () => {
        setIsSubmitted(false);
        setSubmittedData(null);
    }

    if (isSubmitted) {
        const { noun1, noun2, adjective, color } = submittedData;
        return (
            <>
                <p>There was a {color} {noun1} who loved a {adjective} {noun2}.</p>
                <button onClick={restart}>Restart</button>
            </>
        )
    }

    return (
        <div className="Madlibs">
            <h1>Madlibs!</h1>
            <MadlibsForm collectData={collectData}/>
        </div>
    )
}

export default Madlibs;