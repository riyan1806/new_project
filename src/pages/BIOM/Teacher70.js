import TeacherTable from "../../components/TeacherTable";
import TeacherInfo from "../../components/Teacher_Info";


export default function Teacher70(){
    return(
        <>
        <TeacherInfo id="7" dept='/Dashboard/Biom' pic='gs://faculty-availability-sys-888c8.appspot.com/AR_BIOM.jpg'/>
        <TeacherTable 
        id="faculty/7/timetable"/>
        </>
    )
}