import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Modal, Button, Input } from 'antd'
import {
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';

import firebase from 'firebase'

const { TextArea } = Input;

export default function NoteModal(props) {
    const [editingMode, setEditingMode] = useState(false);
    const [noteData, setNoteData] = useState(props.note);
    const editNote = () => {
        console.log('editing note..');
        setEditingMode(true);
    }
    const deleteNote = () => { 
        props.handleModal();
        console.log('deleting note..');
        return firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/notes/' + props.noteKey).remove();        
    }
    const saveNote = () => { 
        setEditingMode(false);        
        console.log('saving data'); 
        return firebase.database().ref().update({ ['users/' + firebase.auth().currentUser.uid + '/notes/' + props.noteKey]: noteData })
    }

    const closeModal = () => {
        setEditingMode(false);
        props.handleModal();
    }
    const handleChange = ({ target: { value, id } }) => {
        setNoteData({
            ...noteData,
            [id]: value,
        });
        console.log(noteData);
    }

    return (
        <>
        {editingMode 
        ? (
            <Modal
                title={<Input id='title' defaultValue={props.note.title} bordered={false} onChange={handleChange}></Input> }
                centered
                visible={props.visible}
                onOk={props.handleModal}
                onCancel={closeModal}
                footer={[
                    <Button key="Cancel" onClick={editNote}>
                        Cancel
                    </Button>,
                    <Button key="Save" type="primary" onClick={saveNote}>
                        Save
                    </Button>,
                ]}
            >
                <TextArea id='text' defaultValue={props.note.text} autoSize onChange={handleChange}></TextArea>
            </Modal>
        ) 
        : (
            <Modal
                title={props.note.title}
                centered
                visible={props.visible}
                onOk={props.handleModal}
                onCancel={props.handleModal}
                footer={[
                    <Button danger key="delete" onClick={deleteNote}>
                        Delete
                    </Button>,
                    <Button key="edit" onClick={editNote}>
                        Edit
                    </Button>,
                    <Button key="close" type="primary" onClick={props.handleModal}>
                        Close
                    </Button>,
                ]}
            >
                <p>{props.note.text}</p>
            </Modal>
        )}
            
        </>
    )
}