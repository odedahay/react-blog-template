import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import SingleArticle from './components/SingleArticle';
import CreateArticle from './components/CreateArticle';
import Login from './components/Login';
import SignUp from './components/SignUp';




ReactDOM.render(
    <BrowserRouter>
        <div>
            <NavBar/>
            <Route exact path="/" component={Welcome} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/article/:slug" component={SingleArticle} />
            <Route path="/article/create" component={CreateArticle} />
            <Footer />

        </div>


    </BrowserRouter>
    ,document.getElementById('root'));
    registerServiceWorker();
