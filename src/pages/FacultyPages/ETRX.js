import MainscreenNavbar from "../../components/Faculty_Dashboard_Navbar";
import Title from "../../components/DashboardTitle";
import DepartmentTable_ETRX from "../../components/DashboardTable_ETRX";
export default function Faculty_Etrx(){
    return(
        <>
        <MainscreenNavbar dashboard='/Faculty/Dashboard' profile='/Faculty' pic='gs://faculty-availability-sys-888c8.appspot.com/pp.jpeg'/>
        <Title name="ETRX DEPARTMENT" navigate="/Faculty/Dashboard"/>
        <DepartmentTable_ETRX  id1='6' id2='61'id3='62'/>
        </>
        
    )
}