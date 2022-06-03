import { React, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './nav';
import Header from './header';
import Search from './search'
import './index.css';
import App from './App';

ReactDOM.render(
  <Fragment>
    <Navigation />
    <Header />
    <Search />
    <App />
  </Fragment>,
  document.getElementById('root')
);
