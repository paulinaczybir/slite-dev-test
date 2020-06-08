import React from 'react'

export default function NoteLink(props) {
  return (
    <div className="editorial-note-link">
      <span className="note-link-text">
        <img className="note-link-img" src="/note-link.png" />
        {props.children}
      </span>
    </div>
   ) 
}
