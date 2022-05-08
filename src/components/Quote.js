import React from 'react';




function Quote(props) {
    //gets the type (quote, paraphrase) from IContainer; gets quote type from IContainer
    let type = props.type
    let quote = props.quote


    // Creates
    const introductionArray = [
        "argues", "asserts", "believes", "claims", "emphasizes", "insists", "observes", "reminds us", "reports", "suggests"
    ]

    // checks if the state is currently quote
    if (type === "Quotation") {
        return (
            <div className="quote">
                <div className="author"
                     title={quote.author}>{quote.author} ({quote.year}) {introductionArray[Math.floor(Math.random() * introductionArray.length)]}
                </div>
                <blockquote>
                    "{quote.quote}"
                </blockquote>
                <div className="citation" title={quote.citation}> (p. {quote.page}).</div>
            </div>)
    } else {
        return (
            <div className="quote">
                <div className="author" title={quote.author}> {quote.author} ({quote.year}) {introductionArray[Math.floor(Math.random() * introductionArray.length)]}
                </div>
                <blockquote>
                    {quote.paraphrase}
                </blockquote>
                <div className="citation" title={quote.citation} >(p. {quote.page}).</div>
            </div>)
    }
}


export default Quote;