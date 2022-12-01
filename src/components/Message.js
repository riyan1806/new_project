import React from "react";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Todo({ faculty, toggleComplete, handleDelete, handleEdit,}) {
  const [newMessage, setNewMessage] = React.useState(faculty.message);

  const handleChange = (e) => {
    e.preventDefault();
    if (faculty.message === true) {
        setNewMessage(faculty.message);
    } else {
      faculty.message = "";
      setNewMessage(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input
       
        type="text"
        value={faculty.message === "" ? newMessage : faculty.message}
        className='md:w-1/2 w-10/12 rounded-lg mt-2'
        onChange={handleChange}
      />
        <button
        
          className='text-green-400  h-10 w-10 md:ml-4'
          onClick={() => handleEdit(faculty, newMessage)}
        >
          <CheckCircleIcon id="i" className='text-xl' />
        </button>
      <div className="actions">
     
     
      </div>
    </div>
  );
}