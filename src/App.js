import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Formlable from './components/Main/Formlable.js';
import React,{useState} from 'react';
import AlertBox from './components/AlertBox/Alert';
import AboutUs from './components/About';


function App() {

  const backgroundStyle = {

    backgroundColor: "#3c216e",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    
  };

  const [darkMode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const handleChange = ()=>{
    if(darkMode === "dark"){
      setDarkMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Converted to light mode" , "Success");
      
    } 
    else {
      setDarkMode("dark");
      document.body.style.backgroundColor = '#dad0ed';
      showAlert("Converted to dark mode" , "Success");
    }
  }



  return (
    <div className="App">
      <header className="App-header" style={backgroundStyle} >
        <h1>Text Toolify</h1>
      </header>
      <Navbar title = "TextUtility" mode ={darkMode} toggleMode ={handleChange}/>
      <AlertBox alert ={alert}/>
      <Formlable  mode = {darkMode} showAlert= {showAlert} />
      <AboutUs />
    </div>
  );
}

export default App;
