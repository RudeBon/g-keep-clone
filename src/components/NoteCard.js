import React from 'react'
import 'antd/dist/antd.css'
import { Card } from 'antd'
import {
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';

export default function NoteCard(props) {

    console.log('card delivered');
    return (
        <Card
            title={props.note.title}
            extra={<>                
                <EditOutlined />
                <DeleteOutlined />
            </>}
            style={{ maxWidth: '250px' }}
        >
            <p>{props.note.text}</p>
        </Card>
    )
}
