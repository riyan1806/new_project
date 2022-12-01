import TeacherTable from "../../components/TeacherTable";
import TeacherInfo from "../../components/Teacher_Info";


export default function Teacher51(){
    return(
        <>
        <TeacherInfo id="51" dept='/Dashboard/Extc' pic='gs://faculty-availability-sys-888c8.appspot.com/HR_EXTC.png'/>
        <TeacherTable 
        id="faculty/51/timetable"/>
        </>
    )
}