import { Divider } from 'antd';
import 'antd/dist/antd.css';
import NotesList from './NotesList';
import AddNoteComp from './AddNoteComp';
import firebase from 'firebase';

export default function Authorized() {
    return (
        <>
            {firebase.auth().currentUser !== null
            ? (
                <>
                    <AddNoteComp />
                    <Divider />
                    <NotesList />
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