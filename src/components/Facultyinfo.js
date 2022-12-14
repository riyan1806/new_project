import { Fragment , useRef} from 'react'
import * as React from "react";
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
// import { useDemoData } from '@mui/x-data-grid-generator';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import Logo from '../components/Images/icons8-crane-bird-100.png'
import  Avatar  from '../components/Images/icons8-boy-64.png'
import { Button, Typography } from '@mui/material';
// import { getAuth } from 'firebase/auth';
import {  db } from "../firebaseConfig";
import { useState } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import { collection, where,query,onSnapshot,limit, documentId ,updateDoc,doc, deleteDoc} from "firebase/firestore"; 
import { borderRadius } from '@mui/system';
import Message from './Message';
import Status from './Status';
import { Dialog } from '@headlessui/react'
import { ExclamationTriangleIcon , CheckIcon} from '@heroicons/react/24/outline'
const navigation = [
    { name: 'Dashboard', href: '/Dashboard' },   
  ]

  function CustomFooterStatusComponent(props) {
    return (
      <Box sx={{ p: 1, display: 'flex' }}>
        <FiberManualRecordIcon
          fontSize="small"
          sx={{
            mr: 1,
            color: props.status === true ? '#4caf50' : '#d9182e',
          }}
        />
        <div className='hidden md:flex'>

        {props.status===true ? "Present": "Absent"} 
        </div>
      </Box>
    );
  }
  


  export { CustomFooterStatusComponent };

  
  export default function TeacherInfo(props){
      
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)


    const cancelButtonRef = useRef(null)
      const navigate = useNavigate();
      
      const storage = getStorage();
   
     

    getDownloadURL(ref(storage, props.pic))  
    .then((url) => {
      const img = document.getElementById('myimg');
      img.setAttribute('src', url);
    })
    .catch((err) => {
      console.log(err.message)
    })
   
      

      // Set the "capital" field of the city 'DC'
    
    
    const [faculty, setFaculty] = React.useState([]);
    
    const [message, setMessage] = React.useState([]);

    const [status, setStatus] = React.useState([faculty.status]);


    React.useEffect(() => {
      // const auth = getAuth();
      const q = query(collection(db,"faculty"));
      const q1 = query(q, where(documentId(),"==",props.id),limit(1));
      
      const unsub = onSnapshot(q1, (querySnapshot) => {
        let facultyArray = [];
        querySnapshot.forEach((doc) => {
          facultyArray.push({ ...doc.data(), id: doc.id });
        });
        setMessage(facultyArray);
        setStatus(facultyArray);
        setFaculty(facultyArray);
      });
      
      return () => {
        unsub();
      };
    },[]);
    
    const handleEdit = async (faculty, message) => {
        await updateDoc(doc(db, "faculty", faculty.id), { message: message });
        setOpen1(true);

      };
     
      const handleEditStatus = async (faculty, status) => {
        await updateDoc(doc(db, "faculty", faculty.id), { status: status });
        setOpen(true);
      };
    
      const handleDelete = async (id) => {
        await deleteDoc(doc(db, "faculty", id));
      };
  // const user = auth.currentUser;
  // const Photo = user.photoURL;
  // const info = [
    
  //     { name: faculty.first_name},
  //     { name: 'Email: amit.nerurkar@vit.edu.in'}
      
  
  //   ]
  
  
  return(
    
    // <div className="mx-auto max-w-9xl max-h-screen">
    <> <Transition.Root show={open} as={Fragment}>
    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition.Child>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                     Status
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Status Updated Successfully!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
               
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  X
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root><Transition.Root show={open1} as={Fragment}>
    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition.Child>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                   
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                     Special Message
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Special Message Updated Successfully!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
               
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen1(false)}
                  ref={cancelButtonRef}
                >
                  X
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
        <div className="relative z-10 bg-white pb-8  lg:w-full lg:max-w-full lg:max-h-screen">
          {/* <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg> */}

          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-4 lg:justify-start" aria-label="Global">
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="/">
                      <span className="sr-only">Your Company</span>
                    
                      <img id='myimg'
                        alt="Your Company"
                        className="h-10 w-auto sm:h-10 rounded-full"
                        
                        
                        />
                     
                    </a>
                  </div>
                </div>
                <div className="sm:ml-4 sm:block  md:ml-10 md:block md:pr-4 mr-12">
                 
                  {faculty.map((faculty) => (
                    <>
                    <Link key={faculty.first_name}  className=" ml-1 sm:font-medium font-semibold text-sm sm:text-lg flex sm:block text-gray-900 hover:text-gray-500">
                      Name: {faculty.first_name} {faculty.last_name}
                    
                    </Link>
                    <Link key={faculty.first_name}  className=" ml-1 sm:font-medium font-medium text-xs sm:text-lg flex sm:block text-gray-900 hover:text-gray-500">
                    Email: {faculty.email}
                  
                  </Link>
                  </>
                  ))}
                
                </div>
                <Box className="md:flex -mr-4 -ml-5" sx={{ p: 1  }}>
                {faculty.map((faculty) => (
                  <CustomFooterStatusComponent status={faculty.status}/>
                  ))}
                      {/* <FiberManualRecordIcon
                        fontSize="medium"
                        sx={{
                          mr: 1,
                          color: '#4caf50' ,
                        }}
                        /><Typography className="hidden md:flex">
                        
                        Present
                      </Typography> */}
                    </Box>
                        <div className="-mr-2 flex items-center md:absolute md:right-0">
                          <div className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                           
                            <ArrowBackIcon className="h-6 w-6" aria-hidden="true" 
                              onClick={() => navigate(props.dept)} 
                              />
                              
                             </div>
                      
                        </div>
              </nav>
              <Typography className="pt-12">
                Special Message:
                <Typography className="text-red-600">  
               
                    <div className="todo_container">
                        {faculty.map((faculty) => (
                          <Message
                          key={faculty.id}
                          faculty={faculty}
                          
                          handleDelete={handleDelete}
                          handleEdit={handleEdit}
                          />
                          ))}
                    </div>
               
                
                </Typography>  
              </Typography>
              <Typography className="pt-4 ">
                Status :
                  <div className='mt-4'>
                        {faculty.map((faculty) => (
                          <>
                        <Status
                        key={faculty.status}
                        faculty={faculty}
                        
                        handleEdit={handleEditStatus}
                        
                        />
                    </>
                        ))}
                    </div>
               
                
              
              </Typography>
            </div>
                    
            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={Avatar}
                        alt=""
                        />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                  <Box  sx={{ p: 1 , display: 'flex' }}>
                      <FiberManualRecordIcon
                        fontSize="medium"
                        sx={{
                          mr: 1,
                          color: '#4caf50' ,
                        }}
                        /><Typography className="text-gra">

                      Present
                      </Typography>
                    </Box>
                    {navigation.map((item) => (
                      <Link
                      key={item.name}
                      to={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/Login"
                    className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                    >
                    Log in
                  </Link>
                  
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          </div>
        </>
    )
        
}