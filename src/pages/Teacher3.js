import TeacherTable from "../components/TeacherTable";
import TeacherInfo from "../components/Teacher_Info";


export default function Teacher3(){
    return(
        <>
        <TeacherInfo id="3" dept='/Dashboard/Cmpn' pic='gs://faculty-availability-sys-888c8.appspot.com/sb.jpeg'/>
        <TeacherTable 
        id="faculty/3/timetable"/>
        </>
    )
}