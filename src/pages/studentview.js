import Dashboard from "../components/Dashboard";
import Title from "../components/DashboardNavbar";
import MainscreenNavbar from "../components/MainscreenNavbar";


export default function Studentsview() {
  return (
    <div className="bg-white h-screen" >
      
      <MainscreenNavbar/>
      <Title name="SELECT - BRANCH"/>
      {/* <div className="flex grid-cols-2 h-screen"></div> */}
      <Dashboard/>
    </div>
  );
}
