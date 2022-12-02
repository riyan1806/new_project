import MainscreenNavbar from "../../components/Faculty_Dashboard_Navbar";
import Title from "../../components/DashboardTitle";
import DepartmentTable_IT from "../../components/DashboardTable_IT";
export default function Faculty_It(){
    return(
        <>
        <MainscreenNavbar pic='gs://faculty-availability-sys-888c8.appspot.com/pp.jpeg'/>
        <Title name="IT DEPARTMENT" navigate="/Faculty/Dashboard"/>
        <DepartmentTable_IT  id1='4' id2='41'id3='42'/>
        </>
        
    )
}