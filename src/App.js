import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Contextos/contexAuth";
import Home from "./Component/Home";
import Fnsingup from "./Component/Singup";
import Note from "./Component/Note";
import PrivateRoute from "./Component/PrivateRoute";
import MakeNote from "./Component/MakeNote";


function App() {

  return (<div>
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path='/note' component={Note} />
           <Route path='/singup' component={Fnsingup}></Route>
          <Route exact path='/' component = {Home}></Route>
          
       </Switch>
      </Router>
    </AuthProvider>
  </div>
  );
}

export default App;
