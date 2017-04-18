import React from 'react';
import ReactDOM from 'react-dom';
import ActorContainer from './containers/ActorContainer';

window.onload = function(){
  ReactDOM.render(
    <ActorContainer/>,
    document.getElementById('app')
  );
}
