import React from 'react';
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import NotFound from './components/NotFound'; 

// Dependance de react-router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

const router = (
<Provider store={store}>  
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="view/:postId" component={Single}></Route>
      <Route path="*" component={ NotFound } />
    </Route>
  </Router> 
</Provider>
)

export default router;