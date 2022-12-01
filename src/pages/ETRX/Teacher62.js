import TeacherTable from "../../components/TeacherTable";
import TeacherInfo from "../../components/Teacher_Info";


export default function Teacher62(){
    return(
        <>
        <TeacherInfo id="62" dept='/Dashboard/Etrx' pic='gs://faculty-availability-sys-888c8.appspot.com/AJ_ETRX.jpg'/>
        <TeacherTable 
        id="faculty/62/timetable"/>
        </>
    )
}