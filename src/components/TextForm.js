import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Uppercase was clicked::" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!","success");
  }

  const handleLoClick =() =>{
    // console.log("Lowercase was clicked::" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!","success");
  }

  const handleClearClick =() =>{
    // console.log("Lowercase was clicked::" + text);
    let newText = '';
    setText(newText);
    props.showAlert("text cleared!","success");
  }

  const handleOnChange = (event) => {
    // console.log("On Changed");
    setText(event.target.value);
  }

  const handleCopy =()=> {
    // console.log("i am copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getselection().removeAllRanges();
    props.showAlert("copied to clipboard","success");
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
  }


  const [text, setText] = useState(" ");
  //   setText("new text");
  return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>
      <h2 className='mb-3'> {props.heading} </h2>
      <div className="mb-3">
        {/* <label for="mybox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} 
                  style={{backgroundColor : props.mode==='dark'?'#13466e':'white',color : props.mode==='dark'?'white':'#042743' }} 
                  id="mybox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>



    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text Summery</h2>
        <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} 
              words and  {text.length} characters </p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3> Preview </h3>
        <p> {text.length>0?text: " Nothing to preview."} </p>
    </div>
    </>
  );
}
