import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pages from './Views/Pages/index';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Pages.Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
