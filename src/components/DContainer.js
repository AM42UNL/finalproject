import React from "react";
import DBoard from './DBoard';
import DCard from './DCard';


function DContainer() {
  //Creates a column with a title and 3 draggable pieces.
  return (
    <div className="flexbox" >

        <DBoard id= "board-author1" className ="dboard">
          <DCard id="author-title" className="dcard" draggable="false">
            <p> <b>Author Section </b> </p>
          </DCard>

          <DCard id="dcard-1" className="dcard" draggable="true">
            <p> A royal spark. </p>
          </DCard>

          <DCard id="dcard-2" className="dcard" draggable="true">
            <p>Lachner, A., Backfisch, I., Hoogerheide, V., van Gog, T., & Renkl, A. </p>
          </DCard>


          <DCard id="dcard-3" className="dcard" draggable="true">
            <p>Newsweek. https://www.newsweek.com/australia-covid-19-vaccine-neutralize-virus-1500849 </p>
          </DCard>


          </DBoard>

          <DBoard id= "board-date2" className ="dboard">
          <DCard id="date-title" className="dcard" draggable="false" style = {{backgroundColor: 'blue'}}>
            <p><b>Date Section</b> </p>
          </DCard>

          <DCard id="dcard-4" className="dcard" draggable="true">
            <p>Gander, K. </p>
          </DCard>

          <DCard id="dcard-5" className="dcard" draggable="true">
            <p>Roberts, S. </p>
          </DCard>

          <DCard id="dcard-6" className="dcard" draggable="true">
            <p>(2020, April 29) </p>
          </DCard>


          </DBoard>

          <DBoard id= "board-title3" className ="dboard">
          <DCard id="title-Title" className="dcard" draggable="false">
            <p><b>Title Section</b> </p>
          </DCard>


          <DCard id="dcard-7" className="dcard" draggable="true">
            <p>(2020, May) </p>
          </DCard>

          <DCard id="dcard-8" className="dcard" draggable="true">
            <p> Timing matters! Explaining between study phases enhances students’ learning. </p>
          </DCard>

          <DCard id="dcard-9" className="dcard" draggable="true">
            <p>Early string ties us to Neanderthals. </p>
          </DCard>

          </DBoard>



          <DBoard id= "board-source4" className ="dboard">
          <DCard id="source-title" className="dcard" draggable="false" style = {{backgroundColor: 'blue'}}>
            <p><b>Source Section</b> </p>
          </DCard>


          <DCard id="dcard-10" className="dcard" draggable="true">
            <p> (2020) </p>
          </DCard>


          <DCard id="dcard-11" className="dcard" draggable="true">
            <p>Journal of Educational Psychology, 112,841–853. https://doi.org/10.1037/edu0000396 </p>
          </DCard>


          <DCard id="dcard-12" className="dcard" draggable="true">
            <p>The New York Times. https://www.nytimes.com/2020/04/09/science/neanderthals-fiber-string-math.html</p>
          </DCard>

          </DBoard>



    </div>
  );
}

export default DContainer;

