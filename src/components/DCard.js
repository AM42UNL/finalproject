import React from 'react'

function DCard(props) {

//
    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('dcard_id', target.id);

        setTimeout (() => {

            target.style.display = "none";
            }, 0);
    }

    
    const dragOver = e => {
        e.stopPropagation();
        
    }

    const dragEnd = e => {

      if (e.target.style.display === 'none') {
  
        e.target.style.display = 'block';
  
      }
  
    }

  return (
    <div
    id={props.id}
    className={props.className}
    draggable ={props.draggable}
    onDragStart={dragStart}
    onDragOver={dragOver}
    onDragEnd={dragEnd}
    >
        {props.children}
    </div>
  )
}

export default DCard