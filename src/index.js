import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './css/style.css';
import Login from './Login';
import StatesList from './StatesList';
import SingleStateList from './SingleStateList';
import AddGuestBook from './AddGuestBook';
import GuestBookMessages from './GuestBookMessages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
const rootEl = document.getElementById('root');

// Routing Section

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path='/' component={Login} />
                <Route path='/login' component={Login} />
                <Route path='/getstatelist' component={StatesList} />
                <Route path='/getstatelistabb' component={SingleStateList} />
                <Route path='/addguestdata' component={AddGuestBook} />
                <Route path='/getguestdata' component={GuestBookMessages} />
                
            </div>
        </Router>
    </Provider>,
    rootEl,
);
