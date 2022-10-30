import { Dispatch, SetStateAction, useState } from 'react'
import styles from '../styles/Home.module.css'
import { createNote } from '../services/notes';

interface Props{
 setShowModal: Dispatch<SetStateAction<boolean>>,
 showModal: boolean,
 setCount: Dispatch<SetStateAction<number>>,
 count: number,
}

const Modal = (props:Props) => {
  const {showModal, setShowModal, setCount, count} = props;
  const [form, setForm] = useState({title:'', content:''});

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const {name:key, value} = e.target
    setForm({...form, [key]:value })
    console.log(form);
  }

  const handleSubmit = async() => {
    console.log(form);
    const response = await createNote(form);
    setCount(count+1);
    setShowModal(false);
  }

  return (
    <>
      {showModal?<div className={styles.background}>
        <div className={styles.popup}>
          <h2>
            Create note
          </h2>
          <form className={styles.form}>
            <label>
              Title
            </label>
            <input type="text" name='title' onChange={handleChange}/>
            <label>
              Content
            </label>
              <input type={'text'} name='content' onChange={handleChange}/>
          </form>
          <div className={styles.popupButtons}>
            <button className={styles.button} onClick={() => setShowModal(false)}>cancel</button>
            <button className={styles.button} onClick={handleSubmit}>save</button>
          </div>
        </div>
      </div>:null
      }
    </>
  )
}

export default Modal