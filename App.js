import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./components/Categories/Categories";
import HomePage from "./pages/Home";
import Foter from "./components/Header/AddToCard"
import Signup from "./pages/Signup"
// import Cards from "./components/Cards";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import AddToCard from "./components/Header/AddToCard";
import { Button, Empty, Result } from "antd";

function App() {

  return (
    <>
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/card" element={<AddToCard />} />
          <Route path="/signup" element={<Signup />} />

          {/* <Route path="/Categories" element={<Categories />} /> */}
         
        </Routes>
      </Router>

   
    </div>
    </>
  );
}

export default App;
