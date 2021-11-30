import "./_reset.css";
import "./App.css";
import { HomePage } from "./ui/views/HomePage/HomePage";
import { MemeView } from "./ui/views/MemeView/MemeView";
import { NavigationBar } from "./ui/components/NavigationBar/NavigationBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/memeSheet/:memeId" element={<MemeView />} />
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here! No match route</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
