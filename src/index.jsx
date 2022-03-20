import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Shoes from './components/Shoes';
import Dresses from './components/Dresses';
import Accessories from './components/Accessories'

const App = () => (
  <div class="container">
    <Header title='Móda'/>
    <Dresses />
    <Shoes />
    <Accessories />
    <Footer year='2022' author='Czechitas'/>
  </div> 
);

render(<App />, document.querySelector('#app'));
