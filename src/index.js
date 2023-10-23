import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Coun_ter from './ctp/count';
import Hello_name from './hello world/hello';
import Click_btn from './hello world/hello';
import Counter from './ctp/count';
import Form from './formulaire/form'
import Calculator from './calcule/calcu';

//import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
const fruitArry=[
  "melon",
  "orange",
  "apple",
  "ananas"
]
/*const PersonneArry=[
  "mohamed",
  "khadija",
  "monya",
  "latifa"
]*/
//const Test =()=>{alert("hello hichy")}
root.render(
  <React.StrictMode>
    <Calculator  />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
