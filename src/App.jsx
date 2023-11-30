import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Graphics from "./Pages/Graphics";
import Forms from "./Pages/Forms";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Graphics />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
