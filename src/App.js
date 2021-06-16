import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './jsx/index';

function App() {
  return (
    <Router>
    <div className='App'>
      <Switch>
        <Route path = '/' exact component= {Index} />
      </Switch>
      </div>  
    </Router>
  );
}

export default App;
