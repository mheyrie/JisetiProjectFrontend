import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Contact from "./component/Contact"
import Home from "./component/Home"
import About from "./component/About"
import NavBar from "./component/NavBar"
import Post from "./component/Post"
import LoginForm from "./component/LoginForm"
import RegisterForm from "./component/RegisterForm"



function App() {
  return (
    <div className="App">
      
      
         {/* <Home />
         <About />
         <Contact/> */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/about" element ={<About/>} />
          {/* <Route path="/contact" element ={<Contact/>} /> */}
          {/* <Route path="/post" element ={<Post/>} /> */}
          <Route path="/login" element ={<LoginForm/>} />
          <Route path="/register" element ={<RegisterForm/>} />
        </Routes>
        <Contact />
      </Router>
    </div>
  );
}

export default App;
