import MainscreenNavbar from "../components/MainscreenNavbar";
import Title from "../components/DashboardTitle";
import DepartmentTable from "../components/DepartmentTable";
export default function Cmpn(){
    return(
        <>
        <MainscreenNavbar/>
        <Title name="CMPN BRANCH"/>
        <DepartmentTable/>
        </>
        
    )
}