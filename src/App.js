import React from 'react';

import './App.css';
import{ BrowserRouter as Router, Switch,Route,Redirect} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';

function App() {
    return (
      <Router>
        <div className="App">
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="" ><Redirect to="/" component={Login} /> </Route>
        </Switch>
        </div>

      </Router>
     
  );
}


export default App;
