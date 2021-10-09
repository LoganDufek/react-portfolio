import  React from "react";

import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Project from './components/Project'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";

function App() {




  return (
    <div className="App">
      <Router>
      <main>

        

      <Header >
        
       
          
         
      </Header>
         <div >
         
          <div >
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={ContactMe} />
            {/* <Route exact path="/resume" component={Resume} /> */}
          </Switch>
          </div>
           
          </div>
         
    
        
     <body className="body">

        


     </body>

     <Footer></Footer>
     </main>
      </Router>
      
    </div>

  );
}

export default App;
