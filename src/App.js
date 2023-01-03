import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Psychologists from './components/pages/Psychologists'
import Resgister from './components/pages/Resgister'
import Login from './components/pages/Login'
import Consultations from './components/pages/Consultations'


import Header from "./components/layout/Header";
import NewConsultation from "./components/pages/NewConsultation";

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/psychologists" element={<Psychologists/>}/>
          <Route path="/register" element={<Resgister/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/consultation" element={<Consultations/>}/>
          <Route path="/newconsultation" element={<NewConsultation/>}/>
        </Routes>
    </Router>
  );
}

export default App;
