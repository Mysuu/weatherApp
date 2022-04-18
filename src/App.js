import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hourly from "./components/Hourly/Hourly";
import Home from "./components/Today/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hourly" element={<Hourly />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
