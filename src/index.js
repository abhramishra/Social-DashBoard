import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { startSetUser } from './action/user'


const store = configureStore()
console.log(store.getState())
store.subscribe(() => {
  console.log(store.getState())
})

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
    jsx,
  document.getElementById('root')
);
