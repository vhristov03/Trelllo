import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Components/Card';
import Header from './Header';
import Board from './Components/Board';

const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <React.StrictMode>
    <Header/>
    <App/>
    <div className='Column'>
      <Card title='asd'/>
      <Card title='lorem' author='blah blah' desc='dtebugzpredatelgadenutrepkadolnamrusnagadnadaumreshvkofadanossamoubiistepluhmindilhiumnemijiturkagaloshprost i smotan'/>
      <Board />
    </div>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
