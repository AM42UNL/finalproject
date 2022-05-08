import React, {useState} from 'react';
import Quote from './Quote';

let myEndpoint = "https://fingerscrossed-five.vercel.app/api/random";




function IContainer() {

    // creates a dynamic variable for type of citation
const [type, setType] = useState("Quotation");

//gets a random quote from Neo4j
   async function fetchNeo4j(url){

       // console.log('about to fetch data from:', url);
        const response = await fetch(url);
        if (!response.ok){ console.log('Fetch error: ', response.status);}
        const entriesInJSONformat = await response.json();
       // console.log(entriesInJSONformat.body[0].work.properties.date);

    // uses setQuote to reassign the Quote state to the one just fetched from Neo4j
        setQuote(
            {
                author: entriesInJSONformat.body[0].work.properties.lastName,
                quote: entriesInJSONformat.body[0].quote.properties.quote,
                year: entriesInJSONformat.body[0].work.properties.date,
                paraphrase: entriesInJSONformat.body[0].quote.properties.paraphrase,
                page: entriesInJSONformat.body[0].quote.properties.page,
            }
            )
    }


// creates the Quote dynamic variable
    const [quote, setQuote] = useState({
        author: "Me",
        year: "1993",
        paraphrase: "Some words",
        page: "65",
        quote: "Insightful words",
    })

    const generateQuote = () => {
      //  calls Neo4j database for a new random quote
        fetchNeo4j(myEndpoint);
    }

    const typeSwitch = () => {
        // changes from paraphrase to quote and vise versa
        if (type === "Quotation") {
            setType("Paraphrase");
            document.getElementById("switchType").innerHTML = "Change to Quotation";
        }
        else {
            setType("Quotation");
            document.getElementById("switchType").innerHTML = "Change to Paraphrase";
        }
    }

  return (
    <div className="App">
     <Quote quote={quote}  type={type} />
     <button onClick={generateQuote} id={"newQuoteBtn"}> Generate New Quote</button>
        <button onClick={typeSwitch} id={"switchType"}> Change to Paraphrase</button>
    </div>
  );
}

export default IContainer;

