import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pages from './Views/Pages/index';
import ProtectedRoute from './protectedRoutes/logged';
import ProtectedRouteGuest from './protectedRoutes/guest';

const PageRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Pages.Home} />
          <ProtectedRoute exact path="/login" component={Pages.Login} />
          <ProtectedRoute exact path="/register" component={Pages.Register} />
          <ProtectedRouteGuest exact path="/my-notes" component={Pages.MyNotes} />
          <Route exact path="*" component={Pages.ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default PageRouter;