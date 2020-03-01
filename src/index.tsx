import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route, Switch, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Dashboard } from './views/Dashboard';

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    </Router>, document.getElementById('root'));

//ReactDOM.render(<Dashboard />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
