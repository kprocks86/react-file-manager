import React from 'react'
import { MdInsertDriveFile, MdFolder } from 'react-icons/md'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

class Tree extends React.Component {
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

  preview = file => {
    if (file.type === 'folder') {
      this.props.history.push(`/folders/${file.folderId}`)
    } else {
      console.log(file)
    }
  }

  render () {
    return (
      <div className='Box'>
        <div className='Box-header'>
          <h3 className='Box-title'>File Name</h3>
        </div>
        {this.props.files.map((file, index) => (
          <div
            key={file.name.toString()}
            style={{
              display: 'flex'
            }}
            className={index === file.length ? 'Box-body' : 'Box-footer'}>
            {file.type === 'folder' ? <MdFolder /> : <MdInsertDriveFile />}
            <div
              style={{ paddingLeft: '5px' }}
              onClick={() => this.preview(file)}>
              {file.name}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default withRouter(Tree)
