import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBarComponent from "./Components/NavBar/NavBarComponent";
import MainScreenComponent from "./Components/MainScreen/MainScreenComponent";
import ServicesScreenComponent from "./Components/Services/ServicesScreenComponent";
import ContactScreenComponent from "./Components/Contact/ContactScreenComponent";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarComponent />
        <Switch>
          <Route exact path="/" component={MainScreenComponent} />{" "}
          <Route exact path="/home" component={MainScreenComponent} />{" "}
          <Route exact path="/services" component={ServicesScreenComponent} />{" "}
          <Route exact path="/contact" component={ContactScreenComponent} />{" "}
        </Switch>{" "}
      </Router>{" "}
      <br className="" />
      <br className="" />
      <br className="" />
      <footer className="Footer">
        cleaningservicesbyblanca.com was developed and designed by Kensy Ayala
      </footer>
    </div>
  );
}

export default App;
