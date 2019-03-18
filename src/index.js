import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter , Route, Switch, Redirect} from 'react-router-dom';
import Login from './component/login';
import Member from './component/member';
import Register from './component/register';
import Delete from './component/delete';

const routing = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Register}/>
                <Route path ="/register" component = {App}/>
                <Route path = "/login" component= {Login}/>
                <Route path ="/member" component={Member}/>
                <Route path ="/delete" component={Delete}/>
                <Redirect to="/" />
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
