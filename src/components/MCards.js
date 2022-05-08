
import { useState } from 'react';
import MCard from './MCard';

function MCards(){
    //creates a state that includes teh array of items to match and randomly sorts them
    const [items, setItems] = useState([
        { id: 1, content: "Author", stat: ""},
        { id: 1, content: "Schmidt, N. A., & Brown, J. M.", stat: ""},
        { id: 2, content: "Date", stat: ""},
        { id: 2, content: "(2017)", stat: ""},
        { id: 3, content: "Title", stat: ""},
        { id: 3, content: "History of Fortnight Dances", stat: ""},
        { id: 4, content: "Publisher", stat: ""},
        { id: 4, content: "Jones & Bartlett Learning, LLC.", stat: ""},
        { id: 5, content: "Reference", stat: ""},
        { id: 5, content: "Cook, J. (2020). Cooking for Zombies. Umbrella Press", stat: ""},
        { id: 6, content: "URL", stat: ""},
        { id: 6, content: "www.vocabulary.com", stat: ""},
        { id: 7, content: "In-Text Citaiton", stat: ""},
        { id: 7, content: "(Jones, 1998, p. 199)", stat: ""},
        { id: 8, content: "Quotation", stat: ""},
        { id: 8, content: "“Not all those who wander are lost.”", stat: ""},
    ].sort(() => Math.random() -0.5))
    
//creates a dynamic variable that will keep track of whether the card clicked was the first or second
    const [prev, setPrev] = useState(-1)
//uses the previous card's id and the id of the current clicked to determine if they match, then changes the status accordingly
    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat ="correct"
            items[prev].stat ="correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat="wrong"
            items[prev].stat="wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat =""
                items[prev].stat=""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }

    }
//checks if one or two cards have been clicked, then calls the check function
    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }


// creates a card for each of the items in the item array using map
    return (
    <div className="mcontainer">
        {items.map((item, index) => (
            <MCard key={index} item={item} id={index} handleClick={handleClick} />
        ))}
    </div>
        )

}

export default MCards;