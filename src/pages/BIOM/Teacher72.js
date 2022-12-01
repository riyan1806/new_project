import TeacherTable from "../../components/TeacherTable";
import TeacherInfo from "../../components/Teacher_Info";


export default function Teacher72(){
    return(
        <>
        <TeacherInfo id="72" dept='/Dashboard/Biom' pic='gs://faculty-availability-sys-888c8.appspot.com/PS_BIOM.png'/>
        <TeacherTable 
        id="faculty/72/timetable"/>
        </>
    )
}