import {useState} from "react";
import Login from "./Components/Login";
import Signup from"./Components/Signup";
import "./App.css"
import WelcomePage from "./MainPages/WelcomePage";
//import WelcomePage from './MainPages/WelcomePage';


function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleform = (formName) => {
  //   setCurrentForm(formName);
  // }


  return (
    <div>
    {/* <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleform}/> : <Signup onFormSwitch={toggleform}/>
      } 
      
    </div> */}
    <WelcomePage />
    </div>
  );
}

export default App;