import TeacherTable from "../components/TeacherTable";
import TeacherInfo from "../components/Teacher_Info";


export default function Teacher1(){
    return(
        <>
        <TeacherInfo id="1" dept='/Dashboard/Cmpn'/>
        <TeacherTable 
        id="faculty/1/timetable"/>
        </>
    )
}