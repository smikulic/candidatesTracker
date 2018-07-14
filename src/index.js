import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import root from './sagas/index';
import rootReducer from './redux/reducers';
import registerServiceWorker from './registerServiceWorker';
import { candidateIndexEnter } from './redux/actions/candidate-actions';
import CandidateIndexPageContainer from './redux/containers/candidate-index-page-container';
import DashboardPage from './pages/dashboard-page';
import App from './App';
import history from './lib/history';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(root);

render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path='/' component={DashboardPage} />
          <Route path='/candidates' component={CandidateIndexPageContainer} onEnter={store.dispatch(candidateIndexEnter())} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
