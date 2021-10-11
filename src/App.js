import React from "react";
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume"

function App() {


  return (
    <div className="App">
      <Router>
        <main>
          {/* Imported Header Component */}
          <Header ></Header>
          <div >

            <div >
              {/* Setting up Switch Router to be able to switch between different pages */}
              <Switch>
                <Route exact path="/react-portfolio/" component={AboutMe} />
                <Route exact path="/react-portfolio/portfolio" component={Portfolio} />
                <Route exact path="/react-portfolio/contact" component={ContactMe} />
                <Route exact path="/react-portfolio/resume" component={Resume} />
              </Switch>
            </div>

          </div>
          {/* Imported Footer Component */}
          <Footer></Footer>
        </main>
      </Router>

    </div>

  );
}

export default App;
