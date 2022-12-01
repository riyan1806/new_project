import TeacherTable from "../../components/TeacherTable";
import TeacherInfo from "../../components/Teacher_Info";


export default function Teacher52(){
    return(
        <>
        <TeacherInfo id="52" dept='/Dashboard/Extc' pic='gs://faculty-availability-sys-888c8.appspot.com/SA_EXTC.png'/>
        <TeacherTable 
        id="faculty/52/timetable"/>
        </>
    )
}