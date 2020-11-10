import 'antd/dist/antd.css'
import { Input, Button } from 'antd';

const { TextArea } = Input;

export default function AddNoteComp (){
    return (
        <div>
        <Input placeholder="Title" />
        <TextArea rows={4} placeholder="Type text here"/>
        <Button>Add Note</Button>
        </div>
    )
}