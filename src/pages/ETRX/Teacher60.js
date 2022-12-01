import TeacherTable from "../../components/TeacherTable";
import TeacherInfo from "../../components/Teacher_Info";


export default function Teacher60(){
    return(
        <>
        <TeacherInfo id="6" dept='/Dashboard/Etrx' pic='gs://faculty-availability-sys-888c8.appspot.com/AM_ETRX.jpg'/>
        <TeacherTable 
        id="faculty/6/timetable"/>
        </>
    )
}