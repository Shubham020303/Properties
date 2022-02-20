import React from 'react';

//Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Styles
import { GlobalStyle } from './GlobalStyle';

//Components
import Header from './components/Header';
import Home from './components/Home';
import AddProperty from './components/AddProperty';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={AddProperty} path="/addproperty" />
    </Switch>
    <GlobalStyle />
  </Router>
);

export default App;