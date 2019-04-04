import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import List from '../components/list'
import Folder from '../components/folder'
import Breadcrumb from '../components/common/breadcrumb'

export default class Drive extends Component {
  render () {
    return (
      <div>
        <Breadcrumb />
        <Switch>
          <Route exact path='/drive/' component={() => <List />} />
          <Route exact path='/drive/folders/:id' component={() => <Folder />} />
        </Switch>
      </div>
    )
  }
}
