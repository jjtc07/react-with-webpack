import React from 'react';
import ReactDOM from 'react-dom';

const app = document.getElementById('app');
app? ReactDOM.render(<h1>Hola mundo</h1>, app) : false;