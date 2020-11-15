import { useState, useEffect } from 'react';
import { Divider } from 'antd';
import 'antd/dist/antd.css';
import NotesList from './NotesList';
import AddNoteComp from './AddNoteComp';
import firebase from 'firebase';

export default function Authorized() {
    const [userNotes, setUserNotes] = useState({});
    useEffect(() => {
        firebase.database().ref('users').child(firebase.auth().currentUser.uid).child('/notes').once('value')
            .then((data) => {
                let fetchedData = data.val()
                console.log('Fetched Data', fetchedData)
                setUserNotes(data.val())
                console.log('Data in state', userNotes)
            })
            .then()
            .catch((error) => {
                console.log('Fetching Error', error)
            });
    }, [])



    return (
        <>
            {firebase.auth().currentUser !== null
                ? (
                    <>
                        <AddNoteComp/>
                        <Divider />
                        <NotesList userNotes={userNotes}/>
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