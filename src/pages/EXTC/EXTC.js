import MainscreenNavbar from "../../components/MainscreenNavbar";
import Title from "../../components/DashboardTitle";
import DepartmentTable_EXTC from "../../components/DashboardTable_EXTC";
export default function Extc(){
    return(
        <>
        <MainscreenNavbar/>
        <Title name="EXTC DEPARTMENT"/>
        <DepartmentTable_EXTC  id1='6' id2='61'id3='62'/>
        </>
        
    )
}