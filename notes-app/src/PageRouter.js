import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pages from './Views/Pages/index';

const PageRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Pages.Home}/>
          <Route exact path="/login" component={Pages.Login}/>
          <Route exact path="/register" component={Pages.Register}/>
        </Switch>
      </Router>
    </div>
  );
}

export default PageRouter;
