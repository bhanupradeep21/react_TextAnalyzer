import Navbar from "./components/Navbar";
import Content from "./components/Content";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <div className="container">
        <Router>
            <Navbar title="Text Analyzer" aboutText="About Textutils" />
            <Routes>
              <Route exact path="/" element={<Content/>}/>
              <Route exact path="/content" element={<Content/>}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
