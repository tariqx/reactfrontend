import React from 'react';
import ReactDOM from 'react-dom';
import DisplayProducts from './DisplayProducts';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DisplayProducts />, div);
  ReactDOM.unmountComponentAtNode(div);
});