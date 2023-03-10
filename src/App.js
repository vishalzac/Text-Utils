import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm.js';
//import About from './components/About.js';

import { useState } from 'react';
import Alert from './components/Alert.js';
//import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function App() {
  const [ mode, setMode ] = useState( 'light' )
  const [ alert, setAlert ] = useState( null );

  const showAlert = (message,type) =>{
    setAlert( {
      msg: message,
      type:type
    } )
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  function toggle() {
    if (mode === 'light') {
      setMode( 'dark' )
      document.body.style.backgroundColor = '#342c34'
      showAlert( "dark mode enabled", "success" )

    
    } else {
      setMode( 'light' )
      document.body.style.backgroundColor = 'white'
      showAlert( "light mode enabled", "success" )


    }
  }
  return (
    <>
       {/* <Router> */}
      {/* <Navbar titles={3} Home="MyHome" /> */}
      <Navbar titles="Text Utils" mode={ mode } toggleMode={ toggle } />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading='Type below' mode={ mode }/>
          {/* <Routes> */}
            {/* <Route exact path="/about" element={ <About aboutText="About"/> } ></Route>
            <Route exact path="/home" element={ <TextForm showAlert={showAlert} heading='Type below' mode={ mode }/>  }></Route> */}
          {/* </Routes> */}
        {/* <About /> */}
        {/* </Router> */ }
        </div>
    </>
  );
}
export default App;


  //in case want change title or show message in title(Put this inside toggle function)
      // setInterval( () => {
      //     document.title = `Text Utils dark mode enabled`
      // },2000)
      //document.title = `Text Utils dark mode enabled`


  //in case want change title or show message in title(Put this inside toggle function)
      // setInterval( () => {
      //     document.title = `Text Utils light mode enabled`
      // },1500)
      //document.title = `Text Utils light mode enabled`