import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />

        <textarea
          placeholder="What happened today"
          className="notes__textarea"
        >
        </textarea>

        <div className="notes__image">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/000/246/312/original/mountain-lake-sunset-landscape-first-person-view.jpg"
            alt="landscape"
          />
        </div>
      </div>
    </div>
  )
}
