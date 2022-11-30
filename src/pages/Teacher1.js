import TeacherTable from "../components/TeacherTable";
import TeacherInfo from "../components/Teacher_Info";


export default function Teacher1(){
    return(
        <>
        <TeacherInfo id="1" dept='/Dashboard/Cmpn' pic='gs://faculty-availability-sys-888c8.appspot.com/pp.jpeg'/>
        <TeacherTable 
        id="faculty/1/timetable"/>
        </>
    )
}