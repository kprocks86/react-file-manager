import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, Redirect } from 'react-router-dom'
import { store, history } from './redux/store'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import './styles.css'
import Drive from './containers/drive'

function App () {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/drive' component={() => <Drive />} />
          <Route component={() => <Redirect to='/drive' />} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
