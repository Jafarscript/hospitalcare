import Header from "./components/layouts/header/Header";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Footer from "./components/layouts/footer/Footer";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/home" component={Home}/>
            {/* <Home /> */}
          <Route path="/about" component={About}/>
            {/* <About /> */}
          <Route path="/contact" component={Contact}/>
            {/* <Contact /> */}
          {/* <Route path="/notFound" Redirect={NotFound}/> */}
            {/* <NotFound /> */}
        </Switch>
        <Footer />
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
