import MainscreenNavbar from "../../components/Faculty_Dashboard_Navbar";
import Title from "../../components/DashboardTitle";
import DepartmentTable from "../../components/DepartmentTable";
export default function Admin_Cmpn(){
    return(
        <>
        <MainscreenNavbar  dashboard='/Admin/Dashboard' profile='/Admin' pic='gs://faculty-availability-sys-888c8.appspot.com/sb.jpeg'/>
        <Title name="CMPN DEPARTMENT" navigate="/Admin/Dashboard"/>
        <DepartmentTable id1='1' id2='2'id3='3'/>
        </>
        
    )
}