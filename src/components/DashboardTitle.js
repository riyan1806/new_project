import { Disclosure } from '@headlessui/react'

import { useNavigate } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function Title(props) {
  const navigate = useNavigate();

  const navigation = [
    { name: props.name ,current: true },
  
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
             
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center lg:justify-center md:justify-center ml-8">
               
               
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-xl font-bold tracking-tight text-gray-900 sm:text-xl md:text-xl' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-xl font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="-mr-2 flex items-center md:absolute md:right-0 ml-6">
                          <div className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                           
                            <ArrowBackIcon className="h-6 w-6" aria-hidden="true" 
                              onClick={() => navigate(props.navigate)} 
                             />
                              
                             </div>
                      
                        </div>
                </div>
              </div>
              
            </div>
          

         
        </>
      )}
    </Disclosure>
  )
}