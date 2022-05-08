import React from 'react'

function DBoard(props) {

    const drop = e => {
        //adds a card to a column when dropped, and ensures that it can only be dropped on a column, not the background
        e.preventDefault();
        const dcard_id = e.dataTransfer.getData('dcard_id');

        const dcard = document.getElementById(dcard_id);
        dcard.style.display = 'block';

        e.target.appendChild(dcard);
    }

 const dragOver = e => {
     e.preventDefault();

 }

// uses the in-built event listeners to create drag and drop even listeners
    return (     
    <div 
    id = {props.id}
    className={props.className}
    onDrop={drop}
    onDragOver={dragOver}
    >
        { props.children }
    </div>
  )
}

export default DBoard