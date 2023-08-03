import React,{useState} from 'react'



export default function TextForm(props) {
    const [text,setText]=useState('');
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked"+text);
       let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success");
    }
    const handleOnChange=(event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
   const handleClearClick=()=>{
    let newText=(' ');
    setText(newText);
    props.showAlert("Text Cleared!","danger");
   }
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!","success");
  }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'
?'white':'black'}}>
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'
?'#0dcaf0':'white',color:props.mode==='dark'
?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-success mx-1" onClick={handleCopy}>Copy Text</button>
    </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'
?'white':'black'}}>
      <h2>Your Text Summery</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    
    </>
  )
}