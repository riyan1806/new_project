
import Navbar_main from "../components/Navbar"
import Sidebar_main from "../components/Sidebar"
import Table_main from "../components/Table"

export default function Studentsview(){
    return(
        <div className="bg-white">
   <Navbar_main/>
   <div className="flex grid-cols-2 h-screen">
    <Table_main />
   </div>
    </div>

    )
}