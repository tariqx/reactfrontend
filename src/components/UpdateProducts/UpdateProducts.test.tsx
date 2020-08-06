import React from 'react';
import ReactDOM from 'react-dom';
import UpdateProducts from './UpdateProducts';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UpdateProducts />, div);
  ReactDOM.unmountComponentAtNode(div);
});