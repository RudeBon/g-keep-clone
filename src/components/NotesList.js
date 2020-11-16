import NoteCard from './NoteCard'

export default function NotesList(props) {
    const renderUserNotesfromFirebase = () => {
        if (typeof props.userNotes === 'object' && props.userNotes !== null) {
            return (
                <>
                    <h3>Your notes</h3>
                    <ul className="NoteList">
                        {Object.keys(props.userNotes).map(key =>
                            <li key={key} className="NoteCard">
                                <NoteCard note={props.userNotes[key]} noteKey={key}></NoteCard>
                            </li>
                        )}</ul>
                </>
            )
        } else {
            return (
                <h2>Your notes will be displayed here</h2>
            )
        }
    }

    return (
        <>
            { renderUserNotesfromFirebase() }
        </>
    )
}