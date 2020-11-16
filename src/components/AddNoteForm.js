import { useState } from 'react'
import 'antd/dist/antd.css'
import { Input, Button } from 'antd'
import firebase from 'firebase'

const { TextArea } = Input;

export default function AddNoteForm() {
    const [note, setNote] = useState({
        title: '',
        text: '',
    })

    const handleChange = ({ target: { value, id } }) => {
        setNote({
            ...note,
            [id]: value,
        });
    };

    const submitNote = () => { 
        writeNoteToDB(firebase.auth().currentUser.uid, note);  
    };

    function writeNoteToDB(userId, note) {
        let newPostKey = firebase.database().ref().child('users/' + userId + '/notes').push().key;
        return firebase.database().ref().update({ ['users/' + userId + '/notes/' + newPostKey]: note });
        
    };

    return (
        <div>
            <Input id="title" placeholder="Title" onChange={handleChange} />
            <TextArea id="text" placeholder="Type text here" autoSize onChange={handleChange} />
            <Button onClick={submitNote}>Add Note</Button>
        </div>
    )
}