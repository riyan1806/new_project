import TeacherTable from "../components/TeacherTable";
import Facultyinfo from "../components/Facultyinfo";


export default function Teacher1(){
    return(
        <>
        <Facultyinfo id="1" dept='/Faculty/Dashboard' pic='gs://faculty-availability-sys-888c8.appspot.com/pp.jpeg'/>
        <TeacherTable 
        id="faculty/1/timetable"/>
        </>
    )
}