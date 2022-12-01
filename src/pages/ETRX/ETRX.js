import MainscreenNavbar from "../../components/MainscreenNavbar";
import Title from "../../components/DashboardTitle";
import DepartmentTable_ETRX from "../../components/DashboardTable_ETRX";
export default function Etrx(){
    return(
        <>
        <MainscreenNavbar/>
        <Title name="ETRX DEPARTMENT"/>
        <DepartmentTable_ETRX  id1='6' id2='61'id3='62'/>
        </>
        
    )
}