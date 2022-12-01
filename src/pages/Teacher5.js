import TeacherTable from "../components/TeacherTable";
import TeacherInfo from "../components/Teacher_Info";


export default function Teacher5(){
    return(
        <>
        <TeacherInfo id="41" dept='/Dashboard/It' pic='gs://faculty-availability-sys-888c8.appspot.com/rb.jpeg'/>
        <TeacherTable 
        id="faculty/41/timetable"/>
        </>
    )
}