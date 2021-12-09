import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MemeDetail } from "./ui/views/MemeDetail/MemeDetail";
import { MemesList } from "./ui/views/MemesList/MemesList";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<MemesList />} />
          <Route path="/meme/detail" element={<MemeDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
