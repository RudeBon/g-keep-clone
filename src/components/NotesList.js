import NoteCard from './NoteCard'

const mockCardsData = [
    { id: 'hfgdhjdj322b', title: "First Card", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" },
    { id: 'dwjbdskjb322', title: "Another card", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo" },
    { id: 'edjhbfdbd23h', title: "Yet another card", text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
    { id: 'hfgdhadj322b', title: "First Card", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" },
    { id: 'dwjbdskj5322', title: "Another card", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo" },
    { id: 'e5jhbfdbd23h', title: "Yet another card", text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
]

export default function NotesList() {
    function getCards() {
        return mockCardsData.map(note =>
            <li key={note.id} className="NoteCard">
                <NoteCard note={note}></NoteCard>
            </li>
        )
    }


    return (
        <>
        <h3>Your notes</h3>
            <ul className="NoteList">
                {getCards()}
            </ul>
        </>

    )
}