import MainscreenNavbar from "../components/MainscreenNavbar";
import Title from "../components/DashboardTitle";
import DepartmentTable_IT from "../components/DashboardTable_IT";
export default function It(){
    return(
        <>
        <MainscreenNavbar/>
        <Title name="IT DEPARTMENT"/>
        <DepartmentTable_IT/>
        </>
        
    )
}