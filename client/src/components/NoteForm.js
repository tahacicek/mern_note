import { useState } from 'react'


export default function NoteForm() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        })

        const data = await res.json()

        if (!res.ok) {
            setError(data.message)
        }else{
            setError(null)
            setTitle('')
            setContent('')
        }
    }

    return (
        <div>
            <form className='' onSubmit={handleSubmit}>
                <h3>Not Ekle</h3>
                <div>
                    <label htmlFor="title">Başlık</label>
                    <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="content">İçerik</label>
                    <textarea id="content" value={content} onChange={e => setContent(e.target.value)}></textarea>
                </div>
                <button type="submit">Ekle</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    )
}
