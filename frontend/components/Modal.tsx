import { Dispatch, SetStateAction } from 'react'

interface Props{
 setShowModal: Dispatch<SetStateAction<boolean>>,
 showModal: boolean,
}

const Modal = (props:Props) => {
  const {showModal, setShowModal} = props;
  const handleChange = () => {

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
            <input type="text" onChange={handleChange}/>
            <label>
              Content
            </label>
            <input type={'text'} onChange={handleChange}/>
          </form>
          <div>
            <button>cancel</button>
            <button>save</button>
          </div>
        </div>
      </div>:null
      }
    </>
  )
}

export default Modal