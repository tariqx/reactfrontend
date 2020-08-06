import React from 'react';
import ReactDOM from 'react-dom';
import AddProducts from './AddProducts';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddProducts />, div);
  ReactDOM.unmountComponentAtNode(div);
});