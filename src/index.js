import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Layout from "./Layout/Layout";
import configureSkill from "./hooks-store/skills-store";
import configureCarousel from "./hooks-store/carousel-store";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

configureSkill();
configureCarousel();

ReactDOM.render(
  <Layout />,
  document.getElementById('root')
);

reportWebVitals();
