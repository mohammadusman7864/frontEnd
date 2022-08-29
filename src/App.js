import "./App.css";
import About from "./staticPages/About";
import TopBar from "./component/topBar/TopBar";
import Contact from "./staticPages/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Terms from "./staticPages/Terms";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import Login from "./staticPages/Login";




function App() {
  return (
    <>
      <Router>
       <TopBar/>
        <Switch>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/contact" >
            <Contact />
          </Route>
          <Route path="/terms and conditions" >
            <Terms />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/" >
            <HomeScreen />
          </Route>
         
        </Switch>
      </Router>
    </>
  );
}

export default App;
