import Dashboard from "../../components/Dashboard";
import Title from "../../components/DashboardNavbar";

import Faculty_Dashboard_Navbar from '../../components/Faculty_Dashboard_Navbar';

export default function Faculty_Dashboard() {
  return (
    <div className="bg-white h-screen" >
      
      <Faculty_Dashboard_Navbar dashboard='/Faculty/Dashboard' profile='/Faculty' pic='gs://faculty-availability-sys-888c8.appspot.com/pp.jpeg' />
      <Title name="SELECT - BRANCH"/>
      {/* <div className="flex grid-cols-2 h-screen"></div> */}
      <Dashboard cmpn='/Faculty/Dashboard/Cmpn' it='/Faculty/Dashboard/It'extc='/Faculty/Dashboard/Extc' etrx='/Faculty/Dashboard/Etrx' biom='/Faculty/Dashboard/Biom'/>
    </div>
  );
}
