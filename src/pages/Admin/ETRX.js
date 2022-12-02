import MainscreenNavbar from "../../components/Faculty_Dashboard_Navbar";
import Title from "../../components/DashboardTitle";
import DepartmentTable_ETRX from "../../components/DashboardTable_ETRX";
export default function Admin_Etrx(){
    return(
        <>
        <MainscreenNavbar dashboard='/Admin/Dashboard' profile='/Admin' pic='gs://faculty-availability-sys-888c8.appspot.com/sb.jpeg'/>
        <Title name="ETRX DEPARTMENT" navigate="/Admin/Dashboard"/>
        <DepartmentTable_ETRX  id1='6' id2='61'id3='62'/>
        </>
        
    )
}