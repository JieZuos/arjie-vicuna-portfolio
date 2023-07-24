import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Home from './components/Home';
import Glitch from './components/glitch';
import Typewriter from './components/typewriter'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
// const myName = ReactDOM.createRoot(document.getElementById('myName'));
// myName.render(
//     <Home />
// );
const myName1 = ReactDOM.createRoot(document.getElementById('myName1'));
myName1.render(
    <Glitch />
);
const myName2 = ReactDOM.createRoot(document.getElementById('myName2'));
myName2.render(
    <Typewriter />
);
