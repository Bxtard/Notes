import { Dispatch, SetStateAction, useState } from 'react'
import styles from '../styles/Home.module.css'
import { updateNote } from '../services/notes';
import { noteType } from '../types';

interface Props{
 setShowUpdateModal: Dispatch<SetStateAction<boolean>>,
 showUpdateModal: boolean,
 setCount: Dispatch<SetStateAction<number>>,
 count: number,
 note: noteType,
}

const ModalUpdate = (props:Props) => {
  const {showUpdateModal, setShowUpdateModal, setCount, count, note} = props;
  const [form, setForm] = useState({title:'', content:''});

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const {name:key, value} = e.target
    setForm({...form, [key]:value })
    console.log(form);
  }

  const handleSubmit = async() => {
    console.log(form);
    const response = await updateNote(note.id, form);
    setCount(count+1);
    setShowUpdateModal(false);
  }

  return (
    <>
      {showUpdateModal?<div className={styles.background}>
        <div className={styles.popup}>
          <h2>
            Update note
          </h2>
          <form className={styles.form}>
            <label>
              Title
            </label>
            <input type="text" name='title' defaultValue={note.title} onChange={handleChange}/>
            <label>
              Content
            </label>
              <textarea  name="content" rows={4} cols={50} defaultValue={note.content} onChange={handleChange}/>
          </form>
          <div className={styles.popupButtons}>
            <button className={styles.button} onClick={() => setShowUpdateModal(false)}>cancel</button>
            <button className={styles.button} onClick={handleSubmit}>save</button>
          </div>
        </div>
      </div>:null
      }
    </>
  )
}

export default ModalUpdate