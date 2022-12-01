import TeacherTable from "../components/TeacherTable";
import TeacherInfo from "../components/Teacher_Info";


export default function Teacher4(){
    return(
        <>
        <TeacherInfo id="4" dept='/Dashboard/It' pic='gs://faculty-availability-sys-888c8.appspot.com/ia.jpeg'/>
        <TeacherTable 
        id="faculty/4/timetable"/>
        </>
    )
}