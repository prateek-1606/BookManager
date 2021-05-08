import React from 'react';
import TodoList from './Component/TodoList';
import "bootswatch/dist/flatly/bootstrap.min.css";
import Nav from './Component/nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={TodoList} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
