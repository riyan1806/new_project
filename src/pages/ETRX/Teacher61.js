import TeacherTable from "../../components/TeacherTable";
import TeacherInfo from "../../components/Teacher_Info";


export default function Teacher61(){
    return(
        <>
        <TeacherInfo id="61" dept='/Dashboard/Etrx' pic='gs://faculty-availability-sys-888c8.appspot.com/AS_ETRX.png'/>
        <TeacherTable 
        id="faculty/61/timetable"/>
        </>
    )
}