import MainscreenNavbar from "../../components/Faculty_Dashboard_Navbar";
import Title from "../../components/DashboardTitle";
import DepartmentTable_EXTC from "../../components/DashboardTable_EXTC";
export default function Faculty_Extc(){
    return(
        <>
        <MainscreenNavbar dashboard='/Faculty/Dashboard' profile='/Faculty' pic='gs://faculty-availability-sys-888c8.appspot.com/pp.jpeg'/>
        <Title name="EXTC DEPARTMENT" navigate="/Faculty/Dashboard"/>
        <DepartmentTable_EXTC  id1='5' id2='51'id3='52'/>
        </>
        
    )
}