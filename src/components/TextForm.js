import React, { useState }  from 'react'

export default function TextForm(props) {
   const Upclick =()=>{
    // console.log("this was clicked")
    let newText = Text.toUpperCase()
    setText(newText)
   props.showalert("created in uppercase","success")
    
    
  }

let space=()=>{
  let newvalue= Text.split(/[ ]+/);
  setText(newvalue.join(" "))
  props.showalert("extra space removed","success")
}

  const lowercaseclick =()=>{
    let second = Text.toLowerCase()
    setText(second)
    props.showalert("created in lowercase","success")
  }
  const Handleonchange =(event)=>{
    setText(event.target.value)
  }
  const [Text, setText] = useState("");
  return (
    <>    
    <div className='container'>                                                    
        <h1 className='text-center'  style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>

       <div className="mb-3">
          
          <textarea className="form-control" value={Text} onChange={Handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black'}} id="my-box" rows="8"></textarea>
         
        </div>
        <button className="btn btn-primary my-2 mx-1"  onClick={Upclick}>To UpperCase</button>
        <button className="btn btn-primary my-2 mx-1" onClick={space}>Remove Extra Space</button>
        <button className="btn btn-primary mx-1" onClick={lowercaseclick}>Create in lowercase</button>
      </div>
      <div className="container " style={{color:props.mode==='dark'?'white':'black'}}>
            
            <h1>Your Text Summary</h1>
            <p>{Text.split(" ").length}words and {Text.length} Character</p>
            <h3>How many minustes for read this text</h3>
            <p>{0.08 *Text.length} Minutes </p>

            <h3 className={` text-${props.mode ==='light'?'dark':'light'}`}>preview</h3>
            <p>{Text.length>0?`${Text}`:'Enter the text Above preview'}</p>

      </div> 
        

    </>
  )
}
