import MainscreenNavbar from "../../components/Faculty_Dashboard_Navbar";
import Title from "../../components/DashboardTitle";
import DepartmentTable_EXTC from "../../components/DashboardTable_EXTC";
export default function Admin_Extc(){
    return(
        <>
        <MainscreenNavbar profile='/Admin' pic='gs://faculty-availability-sys-888c8.appspot.com/sb.jpeg'/>
        <Title name="EXTC DEPARTMENT" navigate="/Admin/Dashboard"/>
        <DepartmentTable_EXTC  id1='5' id2='51'id3='52'/>
        </>
        
    )
}