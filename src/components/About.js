import React,{useState} from 'react'

export default function About() {
    const [mode,newMode] = useState(
        {
            color:'black',
            backgroundColor:'white' 
        }
    )
    const [button,setButton] = useState('Enable Dark-Mode')

    const togglestyle = ()=>{
        if (mode.color === 'black'){
            newMode({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white' 
            })
            setButton('Enable Light Mode')
        }
        else{
            newMode({
                color:'black',
                backgroundcolor:'white',
                border:'1px solid black' 
            })
            setButton('Enable dark Mode')
        }

    }
  return (
    <>
    <div className="container my-5" style ={mode}>
        <h1>About Us</h1>
    <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item my-10 " style={mode}>
    <h2 className="accordion-header">
      <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style ={mode}>
        About Us
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body" style ={mode}>
        <strong>What is Text Analyzer.  </strong>Our Text Analyzer is Basically converting text into differerent forms.Different text transforming has explained below.
      </div>
    </div>
  </div>
  <div className="accordion-item my-3" style={mode}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style ={mode}>
        Convert To upper and Lowercases Clear Text And Reverse Text
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body" style ={mode}>
        <strong>Uppercase and Lowercase conversion and Clear Text And Reverse Text.  </strong> We convert the given text into total lowercase or total uppercase.We clear the text and Revere the text.
      </div>
    </div>
  </div>
  <div className="accordion-item my-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style= {mode} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Text Summary
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body" style ={mode}>
        <strong>Text Summary. </strong>We analyze the text like how many letters are present in your text and how many words and how much time took to process the text.
      </div>
    </div>
  </div>
</div>
<button onClick={togglestyle} type="button" className="btn btn-primary my-3">{button}</button>
</div>
</>
  )
}
