import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home";
import Faculty from "./Pages/Faculty";
import Courses from "./Pages/Courses";
import Testseries from "./Pages/Testseries";
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="testseries" element={<Testseries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

