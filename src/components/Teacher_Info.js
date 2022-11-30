import { Fragment } from 'react'
import * as React from "react";
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
// import { useDemoData } from '@mui/x-data-grid-generator';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import Logo from '../components/Images/icons8-crane-bird-100.png'
import  Avatar  from '../components/Images/icons8-boy-64.png'
import { Typography } from '@mui/material';
// import { getAuth } from 'firebase/auth';
import {  db } from "../firebaseConfig";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import { collection, where,query,onSnapshot,limit, documentId} from "firebase/firestore"; 
import { borderRadius } from '@mui/system';
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
   
    
    const [faculty, setFaculty] = React.useState([]);
    
    React.useEffect(() => {
      // const auth = getAuth();
      const q = query(collection(db,"faculty"));
      const q1 = query(q, where(documentId(),"==",props.id),limit(1));
      
      const unsub = onSnapshot(q1, (querySnapshot) => {
        let facultyArray = [];
        querySnapshot.forEach((doc) => {
          facultyArray.push({ ...doc.data(), id: doc.id });
        });
        setFaculty(facultyArray);
      });
      
      return () => {
        unsub();
      };
    },[]);
    
  // const user = auth.currentUser;
  // const Photo = user.photoURL;
  // const info = [
    
  //     { name: faculty.first_name},
  //     { name: 'Email: amit.nerurkar@vit.edu.in'}
      
  
  //   ]
  
  
  return(
    
    // <div className="mx-auto max-w-9xl max-h-screen">
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
                        className="h-8 w-auto sm:h-10 rounded-full"
                       
                      
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
                {faculty.map((faculty) => ( 
                  <>
                  {faculty.message}
                  </>
                ))}
            
                </Typography>  
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
    )
        
}