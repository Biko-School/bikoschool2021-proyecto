import './reset.css';
import './App.css';
//import getMemes from './getMemes'
import RenderMemes from './core/services/renderMemes';



function App() {
 
  return (
    <div>
      <h1>Guifaffinity</h1>
      <RenderMemes />
    </div>
  )
  }

export default App;