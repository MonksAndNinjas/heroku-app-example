import React from 'react';
import ReactDOM from 'react-dom';
// imports for creating and handling store
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
// import for creating Routes
import { BrowserRouter as Router, Route }from 'react-router-dom'
// imports for reducers
import { combineReducers } from 'redux';
import photoReducer from './reducers/photoReducer';
// styling
import './css/index.css';
//imports pages for rendering routes
import ArtContainer from './containers/ArtContainer';
import App from './App';
// imports nav bar for all routes
//import NavBar from './components/NavBar'; add this back in later
import SocialMedia from './components/SocialMedia';

import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  photos: photoReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

//const Header = () =>
 //<header><NavBar /></header>; add this back in later

const Footer = () =>
  <footer><SocialMedia /></footer>;

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={ArtContainer} />
        <Footer />
        <App />
      </React.Fragment>
    </Router>
  </Provider>),
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
