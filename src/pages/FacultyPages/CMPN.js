import MainscreenNavbar from "../../components/Faculty_Dashboard_Navbar";
import Title from "../../components/DashboardTitle";
import DepartmentTable from "../../components/DepartmentTable";
export default function Faculty_Cmpn(){
    return(
        <>
        <MainscreenNavbar pic='gs://faculty-availability-sys-888c8.appspot.com/pp.jpeg'/>
        <Title name="CMPN DEPARTMENT" navigate="/Faculty/Dashboard"/>
        <DepartmentTable id1='1' id2='2'id3='3'/>
        </>
        
    )
}