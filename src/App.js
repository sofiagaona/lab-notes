import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './Contextos/contexAuth';
import Home from './Component/Home';
import Fnsingup from './Component/Singup';
import Note from './Component/Note';
import PrivateRoute from './Component/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/note" component={Note} />
            <Route path="/singup" component={Fnsingup} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
