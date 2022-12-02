import MainscreenNavbar from "../../components/Faculty_Dashboard_Navbar";
import Title from "../../components/DashboardTitle";
import DepartmentTable_BIOM from "../../components/DashboardTable_BIOM";
export default function Faculty_Biom(){
    return(
        <>
        <MainscreenNavbar pic='gs://faculty-availability-sys-888c8.appspot.com/pp.jpeg'/>
        <Title name="Biom DEPARTMENT" navigate="/Faculty/Dashboard"/>
        <DepartmentTable_BIOM  id1='7' id2='71'id3='72'/>
        </>
        
    )
}