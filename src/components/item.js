import React from 'react'

import { MdInsertDriveFile, MdFolder } from 'react-icons/md'

const Item = ({ name, length, preview, type, folderId, index }) => {
  return (
    <div
      key={name.toString()}
      style={{
        display: 'flex'
      }}
      className={index === length ? 'Box-body' : 'Box-footer'}>
      {type === 'folder' ? <MdFolder /> : <MdInsertDriveFile />}

      <div
        style={{ paddingLeft: '5px' }}
        onClick={() => preview({ name, type, folderId })}>
        {name}
      </div>
    </div>
  )
}

export default Item
