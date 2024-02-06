import { useEffect, useState } from "react"

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
            <div className="notlar">
                {notes && notes.map(note => (
                    <div key={note._id} className="note">
                        <h2>{note.title}</h2>
                        <p key={note._id}>{note.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
