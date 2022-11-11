import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

// import { useDemoData } from '@mui/x-data-grid-generator';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  styled,
} from "@mui/material";

import { db } from "../firebaseConfig";
import { collection, query, onSnapshot, where , limit} from "firebase/firestore";

const StyledTable = styled(Table)`
  width: 90%;
  @media (max-width: 640px) {
    display: block;
  }
  overflow: auto;
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #5850ec;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;


function CustomFooterStatusComponent(props) {
  return (
    <Box sx={{ p: 1, display: "flex" }}>
      <FiberManualRecordIcon
        fontSize="small"
        sx={{
          mr: 1,
          color: props.status === "connected" ? "#4caf50" : "#d9182e",
        }}
      />
      Status {props.status}
    </Box>
  );
}

CustomFooterStatusComponent.propTypes = {
  status: PropTypes.oneOf(["connected", "disconnected"]).isRequired,
};

export { CustomFooterStatusComponent };

export default function TeacherTable(props) {
  const [faculty, setFaculty] = React.useState([]);
  const [faculty1, setFaculty1] = React.useState([]);
  const [faculty2, setFaculty2] = React.useState([]);
  const [faculty3, setFaculty3] = React.useState([]);
  const [faculty4, setFaculty4] = React.useState([]);

  const [faculty5, setFaculty5] = React.useState([]);
  const [faculty6, setFaculty6] = React.useState([]);
  const [faculty7, setFaculty7] = React.useState([]);
  const [faculty8, setFaculty8] = React.useState([]);
  const [faculty9, setFaculty9] = React.useState([]);

  const [faculty10, setFaculty10] = React.useState([]);
  const [faculty11, setFaculty11] = React.useState([]);
  const [faculty12, setFaculty12] = React.useState([]);
  const [faculty13, setFaculty13] = React.useState([]);
  const [faculty14, setFaculty14] = React.useState([]);


  React.useEffect(() => {
    const q = query(collection(db, props.id));

    const q1 = query(q, where("day", "==", "Monday", "||", "venue", "==", null),limit(1));
    const q2 = query(q, where("day", "==", "Tuesday", "||", "venue", "==", null),limit(1));
    const q3 = query(q, where("day", "==", "Wednesday", "||", "venue", "==", null),limit(1));
    const q4 = query(q, where("day", "==", "Thursday", "||", "venue", "==", null),limit(1));
    const q5 = query(q, where("day", "==", "Friday", "||", "venue", "==", null),limit(1));

    const q6 = query(q, where("day","==","Monday"),where("time_start","==","11.15") ,limit(1));
    const q7 = query(q, where("day","==","Tuesday"),where("time_start","==","11.15"),limit(1));
    const q8 = query(q, where("day","==","Wednesday"),where("time_start","==","11.15") ,limit(1));
    const q9 = query(q, where("day","==","Thursday"),where("time_start","==","11.15") ,limit(1));
    const q10 = query(q, where("day","==","Friday"),where("time_start","==","11.15") ,limit(1));

    const q11 = query(q, where("day","==","Monday"),where("time_start","==","13.45") ,limit(1));
    const q12 = query(q, where("day","==","Tuesday"),where("time_start","==","13.45"),limit(1));
    const q13 = query(q, where("day","==","Wednesday"),where("time_start","==","11.15"),limit(1));
    const q14 = query(q, where("day","==","Thursday"),where("time_start","==","13.45") ,limit(1));
    const q15 = query(q, where("day","==","Friday"),where("time_start","==","13.45") ,limit(1));

    
    const unsub = onSnapshot(q1, (querySnapshot) => {
      let facultyArray = [];
      querySnapshot.forEach((doc) => {
        facultyArray.push({ ...doc.data(), id: doc.id });
      });
      setFaculty(facultyArray);
    });

    const unsub1 = onSnapshot(q2, (querySnapshot) => {
      let facultyArray1 = [];
      querySnapshot.forEach((doc) => {
        facultyArray1.push({ ...doc.data(), id: doc.id });
      });
      setFaculty1(facultyArray1);
    });

    const unsub2 = onSnapshot(q3, (querySnapshot) => {
      let facultyArray2 = [];
      querySnapshot.forEach((doc) => {
        facultyArray2.push({ ...doc.data(), id: doc.id });
      });
      setFaculty2(facultyArray2);
    });

    const unsub3 = onSnapshot(q4, (querySnapshot) => {
      let facultyArray3 = [];
      querySnapshot.forEach((doc) => {
        facultyArray3.push({ ...doc.data(), id: doc.id });
      });
      setFaculty3(facultyArray3);
    });

    const unsub4 = onSnapshot(q5, (querySnapshot) => {
      let facultyArray4 = [];
      querySnapshot.forEach((doc) => {
        facultyArray4.push({ ...doc.data(), id: doc.id });
      });
      setFaculty4(facultyArray4);
    });


    const unsub5 = onSnapshot(q6, (querySnapshot) => {
      let facultyArray5 = [];
      querySnapshot.forEach((doc) => {
        facultyArray5.push({ ...doc.data(), id: doc.id });
      });
      setFaculty5(facultyArray5);
    });

    const unsub6 = onSnapshot(q7, (querySnapshot) => {
      let facultyArray6 = [];
      querySnapshot.forEach((doc) => {
        facultyArray6.push({ ...doc.data(), id: doc.id });
      });
      setFaculty6(facultyArray6);
    });

    const unsub7 = onSnapshot(q8, (querySnapshot) => {
      let facultyArray7 = [];
      querySnapshot.forEach((doc) => {
        facultyArray7.push({ ...doc.data(), id: doc.id });
      });
      setFaculty7(facultyArray7);
    });
    
    const unsub8 = onSnapshot(q9, (querySnapshot) => {
      let facultyArray8 = [];
      querySnapshot.forEach((doc) => {
        facultyArray8.push({ ...doc.data(), id: doc.id });
      });
      setFaculty8(facultyArray8);
    });
    
    const unsub9 = onSnapshot(q10, (querySnapshot) => {
      let facultyArray9 = [];
      querySnapshot.forEach((doc) => {
        facultyArray9.push({ ...doc.data(), id: doc.id });
      });
      setFaculty9(facultyArray9);
    });

    const unsub10 = onSnapshot(q11, (querySnapshot) => {
      let facultyArray10 = [];
      querySnapshot.forEach((doc) => {
        facultyArray10.push({ ...doc.data(), id: doc.id });
      });
      setFaculty10(facultyArray10);
    });

    const unsub11 = onSnapshot(q12, (querySnapshot) => {
      let facultyArray11 = [];
      querySnapshot.forEach((doc) => {
        facultyArray11.push({ ...doc.data(), id: doc.id });
      });
      setFaculty11(facultyArray11);
    });

    const unsub12 = onSnapshot(q13, (querySnapshot) => {
      let facultyArray12 = [];
      querySnapshot.forEach((doc) => {
        facultyArray12.push({ ...doc.data(), id: doc.id });
      });
      setFaculty12(facultyArray12);
    });

    const unsub13 = onSnapshot(q14, (querySnapshot) => {
      let facultyArray13 = [];
      querySnapshot.forEach((doc) => {
        facultyArray13.push({ ...doc.data(), id: doc.id });
      });
      setFaculty13(facultyArray13);
    });

    const unsub14 = onSnapshot(q15, (querySnapshot) => {
      let facultyArray14 = [];
      querySnapshot.forEach((doc) => {
        facultyArray14.push({ ...doc.data(), id: doc.id });
      });
      setFaculty14(facultyArray14);
    });

    return () => {
      unsub();
      unsub1();
      unsub2();
      unsub3();
      unsub4();    
      unsub5();
      unsub6();
      unsub7();
      unsub8();
      unsub9();
      unsub10();
      unsub11();
      unsub12();
      unsub13();
      unsub14();
    };
  }, []);

  return (
    <>
      <StyledTable className=" w-11/12 sm:ml-2 md:ml-6 ml-2 sm ">
        {/* <Table className=" block overflow-visible sm:ml-2 md:ml-6 w-5/6 mt-8   ml-2 mr-6 "> */}
        <TableHead>
          <THead>
            <TableCell>Start Time</TableCell>
            <TableCell>End Time</TableCell>
            <TableCell>Monday</TableCell>
            <TableCell>Tuesday</TableCell>
            <TableCell>Wednesday</TableCell>
            <TableCell>Thursday</TableCell>
            <TableCell>Friday</TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {faculty.map((faculty) => (
             faculty1.map((faculty1) => (
              faculty2.map((faculty2) => (
                faculty3.map((faculty3) => (
                  faculty4.map((faculty4) => (

            <TRow>
              <TableCell>{faculty.time_start}</TableCell>
              <TableCell>{faculty.time_end}</TableCell>
              <TableCell>{faculty.venue}</TableCell>
              <TableCell>{faculty1.venue}</TableCell>
              <TableCell>{faculty2.venue}</TableCell>
              <TableCell>{faculty3.venue}</TableCell>
              <TableCell>{faculty4.venue}</TableCell>

            </TRow>
           ))
           ))
           ))
           ))
          ))}

          {faculty5.map((faculty5)=>(
            faculty6.map((faculty6)=>(
            faculty9.map((faculty9)=>(
             faculty7.map((faculty7)=>(
              faculty8.map((faculty8)=>(

              <TRow>
              <TableCell>{faculty5.time_start}</TableCell>
              <TableCell>{faculty5.time_end}</TableCell>
              <TableCell>{faculty5.venue}</TableCell>
              <TableCell>{faculty6.venue}</TableCell>
              <TableCell>{faculty7.venue}</TableCell>
              <TableCell>{faculty8.venue}</TableCell>
              <TableCell>{faculty9.venue}</TableCell>

            </TRow>
            ))
            ))
            ))
            ))
            ))}

          {faculty10.map((faculty10)=>(
            faculty11.map((faculty11)=>(
            faculty12.map((faculty12)=>(
             faculty13.map((faculty13)=>(
              faculty14.map((faculty14)=>(

              <TRow>
              <TableCell>{faculty10.time_start}</TableCell>
              <TableCell>{faculty10.time_end}</TableCell>
              <TableCell>{faculty10.venue}</TableCell>
              <TableCell>{faculty11.venue}</TableCell>
              <TableCell>{faculty12.venue}</TableCell>
              <TableCell>{faculty13.venue}</TableCell>
              <TableCell>{faculty14.venue}</TableCell>

            </TRow>
            ))
            ))
            ))
            ))
            ))}

        </TableBody>
      </StyledTable>
    </>
  );
}
