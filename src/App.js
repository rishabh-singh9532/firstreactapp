
import './App.css';

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from './components/Alert';


// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {

  const [mode, setmode] = useState('light')

  const [alert, setalert] = useState(null)
  
  


  const [first, setfirst] = useState('light')
  const [second, setsecond] = useState('light')

 





  

  
  
 const showalert=(message,type)=>{
        
  setalert({
    msg:message,
    type:type
  })
  setTimeout(() => {
     setalert(null);
  }, 1500);
 }

 const white=()=>{
  if(second==='light'){
    setsecond('red')
    document.body.style.backgroundColor = "red"
   
    

  }else{
    setsecond('light')
    document.body.style.backgroundColor = "white"
   
  }
}


 const green=()=>{
  if(first==='light'){
       setfirst('dark')
       document.body.style.backgroundColor = "green"
      
     
  }else{
    setfirst( 'light')
    document.body.style.backgroundColor = "white"
   
  }



}
let togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor = "grey"

      showalert("Dark Mode Enabled","success")
     

    }
    else{
      setmode('light')
      document.body.style.backgroundColor = "white"
      showalert("Dark Mode disabled","success")
   
    }
  }
  return (
      <>
    <Navbar title="textutils" about="about Us"   second={second} white={white}   mode={mode}  first={first}  green={green}   togglemode={togglemode}/>
     <Alert   alert={alert}/>
    <TextForm heading="Enter Text Below"  mode={mode}   showalert={showalert}  />
      

       
     
     
        </>
        



  );
}

export default App;
