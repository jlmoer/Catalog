import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Movie from './pages/Movie';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:id" component={Movie} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;