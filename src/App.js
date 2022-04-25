import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [Mode , setMode] = useState("light");  //  whether dark mode is enabled or not

  const [alert , setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => { 
      setAlert(null);
    }, 2000);
  }

  const removedBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')

  } 

  const toggleMode = (cls) => {
    removedBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if(Mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success")

    } 
    }
  return (
    <>

      {/* <Navbar title="Textutils" aboutText="AboutUs"/> */}
      {/* <Navbar /> */}
      <Router>
        <Navbar title="Textutils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert ={alert}/>
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={Mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Try123 TextUtils - Word counter,Character counter,
                        Remove extra spaces" mode={Mode} /> 
            </Route>
          </Switch>
        </div>
        </Router>
    </>
  );
}
export default App;


