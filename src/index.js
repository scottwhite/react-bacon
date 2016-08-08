import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import configureStore from './store/configure-store'
import rootSaga from './store/sagas'
import routes from './routes'
import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore(window.__INITIAL_STATE__, browserHistory)
store.runSaga(rootSaga)

const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
  <Provider store={store}>
    <div className='main container-fluid'>
      <Router history={history} children={routes} />
    </div>
  </Provider>,
  document.getElementById('root')
);
