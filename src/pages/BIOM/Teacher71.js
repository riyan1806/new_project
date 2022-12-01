import TeacherTable from "../../components/TeacherTable";
import TeacherInfo from "../../components/Teacher_Info";


export default function Teacher71(){
    return(
        <>
        <TeacherInfo id="71" dept='/Dashboard/Biom' pic='gs://faculty-availability-sys-888c8.appspot.com/NP_BIOM.png'/>
        <TeacherTable 
        id="faculty/71/timetable"/>
        </>
    )
}