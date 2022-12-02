import TeacherTable from "../../components/TeacherTable";
import Facultyinfo from "../../components/Facultyinfo";


export default function Admin(){
    return(
        <>
        <Facultyinfo id="3" dept='/Admin/Dashboard' pic='gs://faculty-availability-sys-888c8.appspot.com/sb.jpeg'/>
        <TeacherTable 
        id="faculty/3/timetable"/>
        </>
    )
}