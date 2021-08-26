import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';



function App() {
  return (
      <Router>
        <Home/>
      </Router>
    // <Router>
    //    <Navbar/>
    //    <Switch>
    //      <Route path='/About' exact component={About}/>
    //      <Route path='/Contact' exact component={Contact}/>
    //      <Route path='/Projects' exact component={Projects}/>
    //    </Switch>
    // </Router>
  );
}

export default App;
