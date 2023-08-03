
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

 const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#123255';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode';
    //  setInterval(() => {
      //  document.title='TextUtils is amazing';
      //}, 2000);
      //setInterval(() => {
      //  document.title='Install textutils NOW';
      //}, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils - Light Mode';
    }
  }
  return (
   <>
   <BrowserRouter>
  
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/about" element={ <About />}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below!" mode={mode}/>}/> 
          </Routes>
</div>

</BrowserRouter>
    </>
  );
}

export default App;
