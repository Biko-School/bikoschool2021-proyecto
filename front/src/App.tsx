import "./_reset.css";
import "./App.css";
import {HomePage} from "./ui/views/HomePage/HomePage"
import {MemeView} from "./ui/views/MemeView/MemeView"

function App() {

  if (false){
    return(<HomePage/>)
  }
  return(<MemeView/>)
  
}

export default App;
