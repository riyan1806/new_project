import MainscreenNavbar from "../../components/MainscreenNavbar";
import Title from "../../components/DashboardTitle";
import DepartmentTable_EXTC from "../../components/DashboardTable_EXTC";
export default function Extc(){
    return(
        <>
        <MainscreenNavbar/>
        <Title name="EXTC DEPARTMENT" navigate="/Dashboard"/>
        <DepartmentTable_EXTC  id1='5' id2='51'id3='52'/>
        </>
        
    )
}