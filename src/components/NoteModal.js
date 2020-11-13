import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Modal, Button, Input } from 'antd'
import {
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';

const { TextArea } = Input;

export default function NoteModal(props) {
    const [editingMode, setEditingMode] = useState(false);
    const editNote = () => {
        console.log('editing note..');
        setEditingMode(prev => !prev);
    }
    const deleteNote = () => { console.log('deleting note..'); }
    const saveNote = () => { console.log('saving data'); }

    const closeModal = () => {
        setEditingMode(false);
        props.handleModal();
    }

    return (
        <>
        {editingMode 
        ? (
            <Modal
                title={<Input defaultValue={props.note.title} bordered={false}></Input> }
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
                <TextArea defaultValue={props.note.text} autoSize></TextArea>
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