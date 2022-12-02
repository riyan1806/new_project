import Dashboard from "../../components/Dashboard";
import Title from "../../components/DashboardNavbar";

import Faculty_Dashboard_Navbar from '../../components/Faculty_Dashboard_Navbar';

export default function Admin_Dashboard() {
  return (
    <div className="bg-white h-screen" >
      
      <Faculty_Dashboard_Navbar profile='/Admin' pic='gs://faculty-availability-sys-888c8.appspot.com/sb.jpeg' />
      <Title name="SELECT - BRANCH"/>
      {/* <div className="flex grid-cols-2 h-screen"></div> */}
      <Dashboard cmpn='/Admin/Dashboard/Cmpn' it='/Admin/Dashboard/It'extc='/Admin/Dashboard/Extc' etrx='/Admin/Dashboard/Etrx' biom='/Admin/Dashboard/Biom'/>
    </div>
  );
}
