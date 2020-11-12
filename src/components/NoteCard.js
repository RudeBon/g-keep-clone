import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Card } from 'antd'
import {
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';
import NoteModal from './NoteModal'

export default function NoteCard(props) {
    const [visible, setVisible] = useState(false)
    const handleModal = (e) => {setVisible(prev => !prev)}    
    

    console.log('card delivered');
    return (
        <>
        <Card
            title={props.note.title}
            // extra={<>                
            //     <EditOutlined onClick={handleNote.editNote}/>
            //     <DeleteOutlined onClick={handleNote.deleteNote}/>
            // </>}
            style={{ maxWidth: '250px' }}
            onClick={handleModal} 
        >
            <p>{props.note.text}</p>
        </Card>
        <NoteModal
        note={props.note}
        visible={visible}
        handleModal={() => handleModal()} 
        >
        </NoteModal>
        </>
    )
}
