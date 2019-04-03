import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import PropTypes from 'prop-types'

class Breadcrumb extends Component {
  static propsTypes = {
    files: PropTypes.shape({
      history: PropTypes.shape.isRequired
    })
  }

  componentDidMount = () => {
    console.log(this.props)
  }

  render () {
    return (
      <div
        style={{
          display: 'flex',
          width: '33%',
          justifyContent: 'space-between'
        }}>
        <div onClick={this.props.history.goBack}> back </div>
        <div onClick={this.props.history.goForward}> next </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default compose(withRouter, connect(mapStateToProps))(Breadcrumb)
