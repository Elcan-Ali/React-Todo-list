import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import TodoApp from "./components/TodoApp";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoApp />);


