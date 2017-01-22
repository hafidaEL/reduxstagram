import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import NotFound from './components/NotFound'; 
import './styles/style.css';


// Dependance de react-router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { Provider } from 'react-redux';

const router = (
<Router history={browserHistory}>
  <Route path="/" component={Main}>
    <IndexRoute component={PhotoGrid}></IndexRoute>
    <Route path="view/:postId" component={Single}></Route>
    <Route path="*" component={ NotFound } />
  </Route>
</Router> 
)


ReactDOM.render(router, document.getElementById('root'));
