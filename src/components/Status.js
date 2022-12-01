import React from "react";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import { pink , red , green } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
export default function Todo({ faculty, handleEdit}) {
  const [newStatus, setStatus] = React.useState(faculty.status);
  const [newStatus1, setStatus1] = React.useState(faculty.status);

  const [selectedValue, setSelectedValue] = React.useState('a');

  
  const handleChange = (event) => {
      setStatus1((event.target.value));
    setStatus(str2bool(event.target.value));

  };
  const controlProps = (item) => ({
      checked: newStatus1 === item,
      onChange: handleChange,
      value: item,
      name: 'color-radio-button-demo',
      inputProps: { 'aria-label': item },
    });
    const str2bool = (value) => {
      if (value && typeof value === "string") {
           if (value.toLowerCase() === "true") return true;
           if (value.toLowerCase() === "false") return false;
      }
      return value;
   }
    //   const handleChange = (e) => {
        //     e.preventDefault();
        //     if (faculty.status === true) {
            //         setStatus(faculty.status);
            //     } else {
//       faculty.status = true;
//       setStatus(e.target.value);
//     }
//   };
  return (
    <div className='md:w-1/2 w-10/12 border-t-orange-700'>
       <div>

    <Radio
        {...controlProps("true")}
        sx={{
            color: green[600],
            '&.Mui-checked': {
                color: green[600],
            },
        }}
        />
      <Radio
        {...controlProps("false")}
        sx={{
            color: red[600],
            '&.Mui-checked': {
                color: red[600],
            },
        }}
        />
    <button
        
        className='text-indigo-600 p-2 border-indigo-800 border rounded-lg ml-6 md:ml-4'
        onClick={() => handleEdit(faculty, newStatus)}
        >Select Status</button>
    
        </div>
    </div>
  );
}