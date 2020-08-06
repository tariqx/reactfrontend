import React from 'react';
import ReactDOM from 'react-dom';
import DeleteProducts from './DeleteProducts';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeleteProducts />, div);
  ReactDOM.unmountComponentAtNode(div);
});