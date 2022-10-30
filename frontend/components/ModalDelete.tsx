import { Dispatch, SetStateAction, useState } from 'react'
import styles from '../styles/Home.module.css'
import { deleteNote } from '../services/notes';

interface Props{
  id: string,
  setShowDelModal: Dispatch<SetStateAction<boolean>>,
  showDelModal: boolean,
  setCount: Dispatch<SetStateAction<number>>,
  count: number,
 }

const ModalDelete = (props: Props) => {
  const {showDelModal, setShowDelModal, setCount, count, id} = props;
  const [form, setForm] = useState({title:'', content:''});

  const handleDelete = async() => {
    const response = await deleteNote(id);
    setCount(count+1);
    setShowDelModal(false);
  }

  return (
    <>
      {showDelModal?<div className={styles.background}>
        <div className={styles.popup}>
          <h2>
            Are you sure you want to delete
          </h2>
          <div className={styles.popupButtons}>
            <button className={styles.button} onClick={() => setShowDelModal(false)}>cancel</button>
            <button className={styles.button} onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>:null
      }
  </>
  )
}

export default ModalDelete