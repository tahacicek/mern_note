import React from 'react'

export default function NoteDetail({ not }) {
    return (
        <div className='not-detay'>
            <h4>{not.title}</h4>
            <p>{not.content}</p>
            {/* formatlayarak */}
            <p>{new Date(not.createdAt).toLocaleString()}</p>
        </div>
    )
}
