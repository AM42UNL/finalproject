import IContainer from "./IContainer";
import DContainer from "./DContainer";
import MContainer from "./MContainer";
import React from 'react';

function Activity (props) {
   //connects with the curActivity variable from App
    const currentActivity = props.activity;


    if (currentActivity === "In-Text") {
        return (
            <div className="App">
                <IContainer/>
            </div>
        )
    } else if (currentActivity === "Drag") {
        return (
            <div className="App">
                <DContainer/>
            </div>
        )
    }else {
        return (
            <div className="App">
                <MContainer/>
            </div>
        )
    }
}

export default Activity;