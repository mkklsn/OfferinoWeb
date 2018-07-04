import React from 'react';
import { Router, Route } from 'react-router';
import Main from './main.jsx';
import Loading from './loading.jsx';
import Auth from './auth.js';
import history from './history.js';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const baseRoutes = () => {
  return (
    <Router history={history}>
        <div>
          <Route path="/" render={(props) => <Main auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Loading {...props} /> 
          }}/>
        </div>
    </Router>
  );
}