import TeacherTable from "../components/TeacherTable";
import TeacherInfo from "../components/Teacher_Info";


export default function Teacher6(){
    return(
        <>
        <TeacherInfo id="42" dept='/Dashboard/It' pic='gs://faculty-availability-sys-888c8.appspot.com/vc.jpeg'/>
        <TeacherTable 
        id="faculty/42/timetable"/>
        </>
    )
}