import React, { useState, useEffect } from 'react'
import { Divider } from 'antd'
import 'antd/dist/antd.css'
import NotesList from './NotesList'
import AddNoteForm from './AddNoteForm'
import firebase from 'firebase'

export default function AuthorizedPage () {
  const [userNotes, setUserNotes] = useState({})
  useEffect(() => {
    if (firebase.auth().currentUser !== null) {
      const ref = firebase.database().ref('users').child(firebase.auth().currentUser.uid).child('/notes')
      ref.on('value', function (snapshot) {
        setUserNotes(snapshot.val())
      }, function (error) {
        console.error(error)
      })
    }
  }, [])

  return (
    <>
      {firebase.auth().currentUser !== null
        ? (
          <>
            <AddNoteForm />
            <Divider />
            <NotesList userNotes={userNotes} />
          </>
          )
        : (
          <>
            <h1>Unauthorized Access</h1>
            <p>You have attemmpted to access a page for which you are not authorized</p>
            <p>Please, sign in to use the app.</p>
          </>
          )}
    </>
  )
}
