import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tendays from "./components/10days/Tendays";
import Hourly from "./components/Hourly/Hourly";
import Home from "./components/Today/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hourly" element={<Hourly />} />
          <Route path="/10days" element={<Tendays />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
