import TeacherTable from "../components/TeacherTable";
import TeacherInfo from "../components/Teacher_Info";


export default function Teacher2(){
    return(
        <>
        <TeacherInfo id="2" dept='/Dashboard/Cmpn' pic='gs://faculty-availability-sys-888c8.appspot.com/dn.jpeg'/>
        <TeacherTable 
        id="faculty/2/timetable"/>
        </>
    )
}