import { FaPen, FaTrash, FaArchive, FaUpload } from "react-icons/fa";

const Card = ({note}) => {
  return (
    
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>{`last updated: ${note.updatedAt}`}</p>
      <i><FaPen/></i>
      <i><FaUpload/></i>
      <i><FaArchive/></i>
      <i><FaTrash/></i>
    </div>
  )
}

export default Card
