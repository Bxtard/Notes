import { Dispatch, SetStateAction, useState } from "react";
import { FaPen, FaTrash, FaArchive, FaUpload } from "react-icons/fa";
import styles from '../styles/Home.module.css'
import {noteType} from '../types';
import {updateNote} from '../services/notes';
import ModalDelete from "./ModalDelete";
import ModalUpdate from "./ModalUpdate";

interface Props{
  note: noteType
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

const Card = (props: Props) => {
  
  const handleClick = async (note: noteType) => {
    const newNote: noteType = {...note }
    newNote.isArchived = !newNote.isArchived;
    const response = await updateNote(note.id, newNote);
    setCount(count+1);
  }
  
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);
  const {note, setCount, count} = props;
  return (
    <div className={styles.card}>
      <h2>{note.title}</h2>
      <label>{`last updated:`}</label>
      <label>{`${note.updatedAt}`}</label>
      <div className={styles.icons}>
        <button onClick={()=> setShowUpdateModal(true)}>
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
        <button onClick={()=> setShowDelModal(true)}>
          <i><FaTrash/></i>
        </button>
        <ModalUpdate note={note} setShowUpdateModal={setShowUpdateModal} showUpdateModal={showUpdateModal} setCount={setCount} count={count}/>
        <ModalDelete id={note.id} setShowDelModal={setShowDelModal} showDelModal={showDelModal} setCount={setCount} count={count}/>
      </div>
    </div>
  )
}
3
export default Card
