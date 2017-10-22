import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './containers/Home.js';
import ProductList from './containers/ProductList.js';
import ProductPage from './containers/ProductPage.js';
import Header from './components/Header.js';
import './css/App.css';


const App = () => (
  <div>
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Home}/>
          <Route path='/ProductList' component={ProductList}/>
          <Route path='/ProductPage' component={ProductPage}/>
        </div>
    </Router>
  </div>
)

export default App;
