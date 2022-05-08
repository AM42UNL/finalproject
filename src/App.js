import Activity from "./components/Activity";
import React, {useState} from 'react';






function App() {
    // creates a dynamic variable
    const [curActivity, setActivity] = useState("In-Text");

    //changes the variable according to what button is pressed
    const viewDrag = () => {
        setActivity("Drag");
    }

    const viewMatch = () => {
        setActivity("Match");
    }

    const viewInText = () => {
        setActivity("In-Text");
    }


    // creates the main app
        return (
           <div>
               <span>
               <button onClick={viewDrag}> Change to Drag and Drop</button>
               <button onClick={viewMatch}> Change to Matching</button>
               <button onClick={viewInText}> Change to In-Text</button>
               </span>
            <div className="App">
                <Activity activity={curActivity} />
            </div>
        </div>

        )

}

export default App;
