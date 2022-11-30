import { Disclosure } from '@headlessui/react'




export default function Title(props) {

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
             
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center lg:justify-center md:justify-center">
               
               
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
                </div>
              </div>
              
            </div>
          

         
        </>
      )}
    </Disclosure>
  )
}