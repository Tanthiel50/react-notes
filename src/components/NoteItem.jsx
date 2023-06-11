import React from 'react'
import { Link } from 'react-router-dom'

const colors = ["#154c79", "#79154c", "#504D70", "#703619"];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};


const NoteItems = ({note}) => {
  return (
    <Link to={`/edit-note/${note.id}`} className='note' style={{ backgroundColor: getRandomColor()}}>
      <h4>{note.title.length > 40 ? (note.title.substr(0, 40)) + '...' : note.title}</h4>
      <p>{note.date}</p>
    </Link>
  )
}

export default NoteItems