import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import MsicApp from "./components/MsicApp/MsicApp";
import Testimoial from "./components/Testimonial/Testimonial";
import Tutorial from "./components/Tutorial/Tutorial";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/testimonial" component={Testimoial} />
        <Route exact path="/tutorial" component={Tutorial} />
        <Route exact path="/msic" component={MsicApp} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
