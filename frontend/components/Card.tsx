import { useState } from "react";
import { FaPen, FaTrash, FaArchive, FaUpload } from "react-icons/fa";
import styles from '../styles/Home.module.css'
import {noteType} from '../types';
import {updateNote} from '../services/notes';

interface Props{
  note: noteType;
}

const handleClick = async (note: noteType) => {
  const newNote: noteType = {...note }
  newNote.isArchived = !newNote.isArchived;
  const response = await updateNote(note.id, newNote);
}

const Card = (props: Props) => {

  const [showModal, setShowModal] = useState(false);
  const {note} = props;
  return (
    <div className={styles.card}>
      <h2>{note.title}</h2>
      <label>{`last updated:`}</label>
      <label>{`${note.updatedAt}`}</label>
      <div className={styles.icons}>
        <button>
          <i><FaPen/></i>
        </button>
        {
          note.isArchived?
          <button onClick={() => handleClick(note)}>
            <i><FaUpload/></i>
          </button>:
          <button onClick={() => handleClick(note)}>
            <i><FaArchive/></i>
          </button>
        }
        <button >
          <i><FaTrash/></i>
        </button>
      </div>
    </div>
  )
}
3
export default Card
