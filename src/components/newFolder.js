import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'

const AddNewFolder = props => {
  const [folderName, setName] = useState('')
  const submit = e => {
    e.preventDefault()
    props.enter(folderName)
  }
  return (
    <div
      style={{
        display: 'flex'
      }}
      className='Box-body'>
      <form style={{ display: 'flex' }} onSubmit={submit}>
        <input
          value={folderName}
          style={{ alignSelf: 'center' }}
          onChange={e => setName(e.target.value)}
        />
        <div
          style={{
            alignSelf: 'center',
            cursor: 'pointer',
            paddingLeft: '10px'
          }}
          onClick={props.close}>
          <MdClose />
        </div>
      </form>
    </div>
  )
}

export default AddNewFolder
