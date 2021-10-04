
import { useState } from "react";

const MAXHEIGHT = 300;
const MINHEIGHT = 20;
const NUMBEROFBARS = 20;

let heights = [];



generateHeights();


function App() {

  return (
    <div className="App">
        <Bars/>
        <SortBtn/>
    </div>
  );
}

function SortBtn(){
  const style = {
    with: "4em",
    height: "2em",
    backgroundColor: "black",
    color: "blue",
    border: "2px solid blue",
    marginLeft: "45%",
    marginTop: "2em"

  }
  return(
    <button
      style = {{...style}}
      onMouseOver = {(e)=>{handleHoverForBtn(e)}}
      onMouseLeave = {(e)=>{handleBtnBlur(e)}}
      onClick = {()=>{handleBtnClick()}}
    >Sort bars</button>
  )
}

async function handleBtnClick(){

  //sort array
  for(let i = 0; i <= heights.length-1; i++){

    let min = i;
 
    for(let j = i+1; j< heights.length; j++){
      
        if (heights[j] < heights[min]){
            min = j
        }
    }

    let temp = heights[min];
    heights[min] = heights[i];
    heights[i] = temp; 

    let el = document.getElementById(i.toString());  
  if(el!= null) 
  el.style.height = heights[i]+'px';

  await sleep(150);

  
  

}
//implement sorted array
// for (let i = 0; i < NUMBEROFBARS; i++) {
      
//   let el = document.getElementById(i.toString());  
//   if(el!= null) 
//   el.style.height = heights[i]+'px';

//   await sleep(50);
// }

}

function handleBtnBlur(e){
  e.target.style.backgroundColor = "black";
}

function handleHoverForBtn(e){
  e.target.style.backgroundColor = "white";
}

function Bars(){
  let count = -1;
 
 
  let areaStyle = {
    backgroundColor: "black",
    width: "100%",  
    display: "flex",
    "alignItems": "flex-end",
    "justifyContent":"center",
    

  }

  const bars = heights.map((barHeight)=>{
    let style = {
      border: '2px solid blue',
      backgroundColor: "black",
      width: "2em",
      margin: "3px",
      "marginTop": "2em",
      display: "inline-block",
      height: barHeight+"px",
      transition: "Background-color .4s",
      writingMode: "vertical-rl",
      textOrientation: "mixed",
      textAlign: "right",
      color: "black"  
      
    }

    count++    
    
    return <div
     className="projectedBars"

     id = {count} 

     style = {{...style}} 

    key = {count} 

    title = {barHeight}

    onMouseOver = {(e) => {handleFocus(e)}}

    onMouseLeave = {(e) =>{handleBlur(e)}}
    >
      {barHeight}
    </div>

 
  })

  return(
    <div id= "drawingArea" style={{...areaStyle}}>
        {bars} 
    </div>
  )
}

function generateHeights(){
  for(let i = 0; i< NUMBEROFBARS; i++)  {
    heights.push(genrateRandomValue(MINHEIGHT, MAXHEIGHT));
   
  }
}

function genrateRandomValue(min, max){

  return Math.floor(Math.random() * (max-min) + min);

}

function handleFocus(e){
  e.target.style.backgroundColor = "Red";
  e.target.style.color = "beige";

}

function handleBlur(e){
  e.target.style.backgroundColor = "black";
  e.target.style.color = "black";
}


function sleep(s) {
  return new Promise(resolve => setTimeout(resolve, s))
}

export default App;
