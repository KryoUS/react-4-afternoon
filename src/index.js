import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';

ReactDOM.render(
    <Router><App /></Router>, document.getElementById('root'));
