import { Navbar } from "flowbite-react"
import { Avatar } from "flowbite-react"
import { Dropdown} from "flowbite-react"
import { NavbarLink } from "flowbite-react/lib/esm/components/Navbar/NavbarLink"
import { Link } from "react-router-dom"

import Xeno_logo from "./Images/icons8-crane-bird-100.png"

export default function Navbar_main(){
    return(
        <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand >
    <img
      src={Xeno_logo}
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
      
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Xeno
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2 ">
  <div className="flex items-center ">
            <div className="flex space-x-1 h-3/5 pr-8">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-violet-700 bg-white border rounded-full focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-indigo-600 rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://cdn-icons-png.flaticon.com/512/1999/1999625.png" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
         Priyanshu More
        </span>
        <span className="block truncate text-sm font-medium">
          priyanshu.more@vit.edu.in
        </span>
      </Dropdown.Header>
      <Dropdown.Item >
        Profile
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item >
        <Link to ="/">Sign Out</Link>
      
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    )
}