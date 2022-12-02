import MainscreenNavbar from "../../components/MainscreenNavbar";
import Title from "../../components/DashboardTitle";
import DepartmentTable_BIOM from "../../components/DashboardTable_BIOM";
export default function Biom(){
    return(
        <>
        <MainscreenNavbar/>
        <Title name="Biom DEPARTMENT" navigate="/Dashboard"/>
        <DepartmentTable_BIOM  id1='7' id2='71'id3='72'/>
        </>
        
    )
}