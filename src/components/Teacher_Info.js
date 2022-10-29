import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
// import { useDemoData } from '@mui/x-data-grid-generator';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import Logo from '../components/Images/icons8-crane-bird-100.png'
import  Avatar  from '../components/Images/icons8-boy-64.png'
import { Typography } from '@mui/material';

const navigation = [
    { name: 'Dashboard', href: '/Dashboard' },   
  ]
const info = [
    { name: 'Name: Amit Nerurkar'},
    { name: 'Email: amit.nerurkar@vit.edu.in'}

]
export default function TeacherInfo(){
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
                      <img
                        alt="Your Company"
                        className="h-8 w-auto sm:h-10"
                        src={Avatar}
                      />
                    </a>
                  </div>
                </div>
                <div className="sm:ml-4 sm:block  md:ml-10 md:block md:pr-4 mr-12">
                 
                  {info.map((item) => (
                    <Link key={item.name}  className=" sm:font-medium font-medium text-sm sm:text-base flex sm:block text-gray-500 hover:text-gray-900">
                      {item.name}
                    </Link>
                  ))}
                
                </div>
                        <div className="-mr-2 flex items-center md:hidden">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                <Box className="hidden md:flex" sx={{ p: 1  }}>
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
              </nav>
              <Typography className="pt-12">
                Special Message:
                <Typography className="text-red-600">
                I will not be Available from 2pm onwards
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