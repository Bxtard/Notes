import { Dispatch, SetStateAction, useState } from 'react'
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
  }

  return (
    <>
      {showModal?<div className='background'>
        <div className='popup'>
          <h2>
            Create note
          </h2>
          <form action="">
            <label>
              Title
            </label>
            <input type="text" name='title' onChange={handleChange}/>
            <label>
              Content
            </label>
            <input type={'text'} name='content' onChange={handleChange}/>
          </form>
          <div>
            <button onClick={() => setShowModal(false)}>cancel</button>
            <button onClick={handleSubmit}>save</button>
          </div>
        </div>
      </div>:null
      }
    </>
  )
}

export default Modal