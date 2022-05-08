function MCard({item, id, handleClick}){
 const itemClass = item.stat ? " active " + item.stat : "";
 //creates each card and creates an event listener for when the user clicks
    return (
    <div className={"mcard" + itemClass} onClick={() => handleClick(id)}>

  <span>{item.content} </span>

    </div>

 )

}


export default MCard;