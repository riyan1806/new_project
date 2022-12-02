import MainscreenNavbar from "../../components/Faculty_Dashboard_Navbar";
import Title from "../../components/DashboardTitle";
import DepartmentTable_IT from "../../components/DashboardTable_IT";
export default function Admin_It(){
    return(
        <>
        <MainscreenNavbar profile='/Admin' pic='gs://faculty-availability-sys-888c8.appspot.com/sb.jpeg'/>
        <Title name="IT DEPARTMENT" navigate="/Admin/Dashboard"/>
        <DepartmentTable_IT  id1='4' id2='41'id3='42'/>
        </>
        
    )
}