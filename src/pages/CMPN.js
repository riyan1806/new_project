import MainscreenNavbar from "../components/MainscreenNavbar";
import Title from "../components/DashboardTitle";
import DepartmentTable from "../components/DepartmentTable";
export default function Cmpn(){
    return(
        <>
        <MainscreenNavbar/>
        <Title name="CMPN DEPARTMENT" navigate="/Dashboard"/>
        <DepartmentTable id1='1' id2='2'id3='3'/>
        </>
        
    )
}