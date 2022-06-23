import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../src/componants/Layout";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');

    const toggleMode = () => {
      if (mode === 'light') {
        setMode('dark');
      }
      else {
        setMode('light');
      }
    }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout mode={mode} toggleMode={toggleMode}/>}>
          <Route path="/" element={<Home mode={mode}/>} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;