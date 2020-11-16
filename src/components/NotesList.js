import NoteCard from './NoteCard'

export default function NotesList(props) {
    const getUserNotesfromFirebase = () => {
        return Object.keys(props.userNotes).map(key => 
            <li key={key} className="NoteCard">
                <NoteCard note={props.userNotes[key]} noteKey={key}></NoteCard>
            </li>
        )
    }

    return (
        <>
            <h3>Your notes</h3>
            <ul className="NoteList">
                {getUserNotesfromFirebase()}
            </ul>
        </>

    )
}