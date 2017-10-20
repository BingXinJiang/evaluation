/**
 * Created by Administrator on 2017/3/29 0029.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import MainPage from './MainPage';


ReactDOM.render(
    <Router>
        <MainPage/>
    </Router>
    ,
    document.getElementById('main-container')
)