import { useEffect, useState } from "react"
import NoteDetail from "../components/NoteDetail"
import NoteForm from "../components/NoteForm"

export default function Home() {

    const [notes, setNotes] = useState(null)
    useEffect(() => {
        const fetchNotes = async () => {
            const res = await fetch('/api/notes')
            if (!res.ok) {
                console.error('Failed to fetch notes')
                return
            }
            const data = await res.json()
            setNotes(data)
        }
        fetchNotes()
    }, [])


    return (
        <div className="home">
            <NoteForm />
            <div className="notlar">
                {notes && notes.map(note => (
                    <NoteDetail key={note._id} not={note} />
                ))}
            </div>
        </div>
    )
}

