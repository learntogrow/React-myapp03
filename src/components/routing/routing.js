
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  //  npm install react-router-dom

import TwoWayBinding from "../two-way-binding/two-way-binding";
import Lifecycle from "../life-cycle/life-cycle";
import Home from "../home/home";
import RepoContainer from "../repo-container/repo-container";


export default function MyRouter() {
    return (
      <Router>
        <nav className="navbar navbar-expand-sm bg-light">
          <ul  className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/two-way">2-Way-Bind</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link"  to="/lifecycle">Lifecycle</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link"  to="/repolist">Repo-List</Link>
            </li>
          </ul>

          </nav>
  
          <hr /><h2>Routing Mechanism</h2>
  
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/two-way">
              <TwoWayBinding />
            </Route>
            <Route path="/lifecycle">
              <Lifecycle name='react' />
            </Route>
            <Route  path="/repolist">
            <RepoContainer/>
            </Route>
          </Switch>

      </Router>
    );
  }
  //  <RepoList prm={fetch('https://api.github.com/search/repositories?q=javascript&sort=stars')} /> 
  // function call is already made //promise is returned // pass by reference // component destroyed by router is present still
// 

  //<RepoList prm={() => fetch('https://api.github.com/search/repositories?q=javascript&sort=stars')} /> 
  //function is returned which will give url string
  //this.props.prm()
  //fresh obj is given back