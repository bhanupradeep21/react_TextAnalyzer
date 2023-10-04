import React,{useState} from "react";
function Content(props) {

    const [Text,newText] = useState("")
    const handleupclick = ()=>{
        console.log("convert to upper case clicked")
        const uppertext = Text.toUpperCase() 
        newText(uppertext)
    }
    const handlelowclick = ()=>{
        console.log("convert to lower case clicked")
        const lowertext = Text.toLowerCase()
        newText(lowertext)
    }
    const handleOnChange = (event)=>{
        console.log("On change")
        newText(event.target.value)
    }
    const handlecleartext = ()=>{
      console.log("clear text clicked")
      newText("")
  }
  const handlereversetext = (event)=>{
    console.log("clicked reverse the text")
    newText(Text.split('').reverse().join(''))
  }


  return (
    <>
      <div>
        <div className="form-group">
          <label htmlFor="textbox"><b>{props.title}</b></label>
          <textarea className="form-control my-3" id="textbox" value={Text} rows="8" onChange={handleOnChange} placeholder="Enter your text here"></textarea>
          <button onClick={handleupclick} className="btn btn-primary">Convert to UPPERCASE</button>
          <button onClick={handlelowclick}  className="btn btn-secondary mx-1">Convert to lowercase</button>
          <button onClick={handlecleartext} className="btn btn-danger mx-1">Clear Text</button>
          <button onClick={handlereversetext} className="btn btn-info mx-1">Reverse text</button>
        </div>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>Your text contains {Text.length} letters</p>
        <p id="words">Your text contains {Text.split(" ").length} words</p>
        <p>Time to read your text {0.08*Text.split(" ").length}</p>
      </div>
    </>
  );
}
export default Content;
