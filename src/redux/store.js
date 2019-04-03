import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { logger } from 'redux-logger'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import reducers from './reducers'

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        {
          // Specify here name, actionsBlacklist, actionsCreators and other options
        }
      )
    : compose

const history = createBrowserHistory()
const routeMiddleware = routerMiddleware(history)
const middlewares = [logger, routeMiddleware]
const store = createStore(
  combineReducers({
    router: connectRouter(history),
    ...reducers // normal reducer.
  }),
  composeEnhancers(applyMiddleware(...middlewares))
)

export { store, history }
