import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("upper clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("upper clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("upper clicked" + text);
    let newText = " ";
    setText(newText);
  };


  const handleOnchange = (event) => {
    // console.log("upper handele on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <> 
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}> 
      <h1>{props.hed} </h1>

      <div className="mb-3 my-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black' }}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary my-6 mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary my-6 mx-2" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary my-6 mx-2" onClick={handleClearClick}>
        Clear all Text
      </button>
      {/* <button className="btn btn-primary my-6 mx-2" onClick={handleCopy}>
        Copy all Text
      </button> */}
    </div>
<div className="container " style={{color: props.mode==='dark'?'white':'black'}} >
  <h1>Your Text Summary</h1>
  <p>Total Character = {text.length}</p>
  <p>Total Words = {text.trim().split(" ").length}</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Write Someting in Box #065f81 "}</p>
</div>
    </> 
  );
}
