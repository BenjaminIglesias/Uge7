import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App2Nested';

const info = [
  {id: "rendering", title:"Rendering with React",info:"Add some text here"},
  {id: "components", title:"components",info:"Add some text herea"},
  {id: "props-v-state", title:"Props v. State",info:"Add some text hereE"},
  {id: "react-routing", title:"Routing with React Router",info:"Cool test"}
]



ReactDOM.render(
  <React.StrictMode>
   <App info={info}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

