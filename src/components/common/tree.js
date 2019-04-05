import React from 'react'
import { MdAddCircleOutline } from 'react-icons/md'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import Item from '../item'
import AddNewFolder from '../newFolder'
const initState = {
  addedFolders: [],
  isNew: false
}
class Tree extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ...initState
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

  _close = () => {
    this.setState({ isNew: false })
  }

  _addNewItem = e => {
    this.setState({ isNew: true })
  }

  _createNew = name => {
    this.setState({
      addedFolders: [
        ...this.state.addedFolders,
        {
          type: 'folder',
          name
        }
      ],
      isNew: false
    })
  }

  render () {
    return (
      <div className='Box'>
        <div className='Box-header'>
          <h3 className='Box-title'>File Name</h3>
          <div style={{ alignSelf: 'center', paddingLeft: '10px' }}>
            <MdAddCircleOutline onClick={this._addNewItem} />
          </div>
        </div>
        {this.state.isNew && (
          <AddNewFolder close={this._close} enter={this._createNew} />
        )}
        {this.state.addedFolders.map((newFolder, index) => (
          <Item
            {...newFolder}
            key={newFolder.name}
            index={index}
            preview={this.preview}
          />
        ))}
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
