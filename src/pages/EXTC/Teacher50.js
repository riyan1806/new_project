import TeacherTable from "../../components/TeacherTable";
import TeacherInfo from "../../components/Teacher_Info";


export default function Teacher50(){
    return(
        <>
        <TeacherInfo id="5" dept='/Dashboard/Extc' pic='gs://faculty-availability-sys-888c8.appspot.com/AR_EXTC.png'/>
        <TeacherTable 
        id="faculty/5/timetable"/>
        </>
    )
}