import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Card } from 'antd'
import NoteModal from './NoteModal'

export default function NoteCard (props) {
  const [visible, setVisible] = useState(false)
  const handleModal = () => { setVisible(prev => !prev) }
  const note = props.note
  const noteKey = props.noteKey
  return (
    <>
      <Card
        title={props.note.title}
        style={{ maxWidth: '250px' }}
        onClick={handleModal}
      >
        <p>{props.note.text}</p>
      </Card>
      <NoteModal
        note={props.note}
        visible={visible}
        handleModal={() => handleModal()}
        note={note}
        noteKey={noteKey}
      />
    </>
  )
}
