import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import configureStore from './store/configure-store'
import rootSaga from './store/sagas'
import routes from './routes'
import { syncHistoryWithStore } from 'react-router-redux'
import trans from './i18n';

const store = configureStore(window.__INITIAL_STATE__, browserHistory)
store.runSaga(rootSaga)

const history = syncHistoryWithStore(browserHistory, store)


trans.setup(navigator.language).then(function(p){
  ReactDOM.render(
    <Provider store={store}>
      <div className='main container-fluid'>
        <Router history={history} children={routes} />
      </div>
    </Provider>,
    document.getElementById('root')
  );
}).catch(function(err){
  ReactDOM.render(
    <div className='main container-fluid error'>Unable to load translation file</div>,
    document.getElementById('root')
  );
})
