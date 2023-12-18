import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home";
import Faculty from "./Pages/Faculty";
import Courses from "./Pages/Courses";
import Delhi_police from "./Pages/Delhi_police";
import Upsc from "./Pages/Upsc";
import Ssc from "./Pages/Ssc";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Log_in";
import Testseries from "./Pages/Testseries";
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign_up" element={<SignUp />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/upsc_courses" element={<Upsc />} />
            <Route path="/delhi_courses" element={<Delhi_police />} />
            <Route path="/ssc_courses" element={<Ssc />} />
            <Route path="/testseries" element={<Testseries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

