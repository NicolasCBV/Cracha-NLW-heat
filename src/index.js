import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';

console.log("Working");

function Main(){
  return(
    <>
      <App/>
    </>
  )
}

ReactDOM.render(<Main/>, document.querySelector('#app'));
