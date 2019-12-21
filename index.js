import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyBook from './MyBook';
import * as serviceWorker from './serviceWorker';

const book={
  isbn:'WGS-JST-001',
  title:'速習 webpack',
  price:454,
  published:'WINGSプロジェクト'
};

ReactDOM.render(
  <MyBook info={book}/>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
