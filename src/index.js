import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import housePricesClientApp from './reducers/reducers';

let store = createStore(housePricesClientApp);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
