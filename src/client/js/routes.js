import React from 'react';
import Router from 'react-router/es/Router';
import Route from 'react-router/es/Route';
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
            return <Loading isFullPage={true} /> 
          }}/>
        </div>
    </Router>
  );
}