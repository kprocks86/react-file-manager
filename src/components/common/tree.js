import React, { useState } from 'react'
import { MdAddCircleOutline } from 'react-icons/md'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import Item from '../item'

class Tree extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      addFolder: {}
    }
    this.inputRef = React.createRef()
  }

  static propsTypes = {
    files: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        folderId: PropTypes.any
      })
    )
  }

  preview = ({ type, folderId }) => {
    if (type === 'folder') {
      this.props.history.push(`/drive/folders/${folderId}`)
    }
  }

  _addNewItem = e => {
    this.setState({
      addFolder: {
        name: '',
        size: null,
        type: 'folder',
        reference: this.inputRef
      }
    })
  }

  render () {
    return (
      <div className='Box'>
        <div className='Box-header'>
          <h3 className='Box-title'>File Name</h3>
          <div style={{ alignSelf: 'center' }}>
            <MdAddCircleOutline onClick={this._addNewItem} />
          </div>
        </div>
        {this.props.files.map((file, index) => (
          <Item
            {...file}
            key={file.name}
            index={index}
            preview={this.preview}
          />
        ))}
      </div>
    )
  }
}

export default withRouter(Tree)

const AddNewFolder = reference => {
  const [folderName, setName] = useState('')
  return (
    <div
      ref={reference}
      style={{
        display: 'flex'
      }}
      className='Box-body'>
      <input value={folderName} onChange={e => setName(e.target.value)} />
    </div>
  )
}
