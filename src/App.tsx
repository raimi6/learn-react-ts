import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default hot(module)(App);
