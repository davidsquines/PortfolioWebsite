
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
       <Navbar/>
       <Switch>
         <Route path='/About' exact component={About}/>
         <Route path='/Contact' exact component={Contact}/>
         <Route path='/Projects' exact component={Projects}/>
       </Switch>
    </Router>
  );
}

export default App;
