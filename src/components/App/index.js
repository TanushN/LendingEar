import React from 'react';
import Messenger from '../Messenger';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig"
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from '../SignIn/index';
import SignUp from "../SignUp/index";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

firebase.initializeApp(firebaseConfig);

export default function App() {

  const [user] = useAuthState(firebase.auth());

    return (
      <Router>
      {/* <div className="App">
        {user ? (<Messenger />) : (<SignIn/>)}
      </div> */}

      <Switch>
          
          {user && (<Redirect from="/login" to="/chat" />)}
          {user && (<Redirect from="/signup" to="/chat" />)}

                    
          {!user && (<Redirect from="/chat" to="/login" />)}

          <Route path="/chat">
            <Messenger/>
          </Route>
          <Route path="/login">
            <SignIn/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/">
            <div>
              Home
            </div>
          </Route>
      </Switch>
      </Router>
    );
}