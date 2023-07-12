import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import Card from "./cards"
import Sdata from "./sdata" 

function ncard(val){
  return(
    <Card
      key={val.id}
      imgscr={val.imgscr}
      title={val.title}
      link={val.link}
      sname={val.sname}
    />
  )

  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <h1 className='heading_style'> TOP 6 NETFLIX SERIES</h1>
  
    {Sdata.map(ncard)}
  </>
);


