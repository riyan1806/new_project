import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

// import { useDemoData } from '@mui/x-data-grid-generator';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import {Table,TableHead, TableCell, TableRow, TableBody, styled,} from "@mui/material";
import { collection, doc, setDoc ,where,query,onSnapshot, getDoc , documentId , limit} from "firebase/firestore"; 
import { db } from "../firebaseConfig";

import { Link } from 'react-router-dom';

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
    background: #5850EC;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
  
    font-size: 18px;
  }
`;

const CLink = styled(Link)`
   &  {
    color: #64137d;
    
    margin-left: 21px;
  }
  `;


function CustomFooterStatusComponent(props) {
  return (
    <Box sx={{ p: 1, display: 'flex' }}>
      <FiberManualRecordIcon
        fontSize="small"
        sx={{
          mr: 1,
          color: props.status === true ? '#4caf50' : '#d9182e',
        }}
      />
      {props.status== true ? "Present": "Absent"} 
    </Box>
  );
}

CustomFooterStatusComponent.propTypes = {
  status: PropTypes.oneOf([true, false]).isRequired,
};

export { CustomFooterStatusComponent };

export default function DepartmentTable(props) {
  // const [status, setStatus] = React.useState('connected');
  // const { data } = useDemoData({
  //   dataSet: 'Employee',
  //   rowLength: 4,
  //   maxColumns: 6,
  // });

  const [faculty, setFaculty] = React.useState([]);
  const [faculty2, setFaculty2] = React.useState([]);
  const [faculty3, setFaculty3] = React.useState([]);

    
    React.useEffect(() => {
      // const auth = getAuth();
      const q = query(collection(db,"faculty"));
      const q1 = query(q, where(documentId(),"==",props.id1),limit(1));
      
      const unsub = onSnapshot(q1, (querySnapshot) => {
        let facultyArray= [];
        querySnapshot.forEach((doc) => {
          facultyArray.push({ ...doc.data(), id: doc.id });
        });
        setFaculty(facultyArray);
      });
      
      return () => {
        unsub();
      };
    },[]);

    React.useEffect(() => {
      // const auth = getAuth();
      const q = query(collection(db,"faculty"));
      const q2 = query(q, where(documentId(),"==",props.id2),limit(1));
      
      const unsub = onSnapshot(q2, (querySnapshot) => {
        let facultyArray2= [];
        querySnapshot.forEach((doc) => {
          facultyArray2.push({ ...doc.data(), id: doc.id });
        });
        setFaculty2(facultyArray2);
      });
      
      return () => {
        unsub();
      };
    },[]);

    React.useEffect(() => {
      // const auth = getAuth();
      const q = query(collection(db,"faculty"));
      const q3 = query(q, where(documentId(),"==",props.id3),limit(1));
      
      const unsub = onSnapshot(q3, (querySnapshot) => {
        let facultyArray3 = [];
        querySnapshot.forEach((doc) => {
          facultyArray3.push({ ...doc.data(), id: doc.id });
        });
        setFaculty3(facultyArray3);
      });
      
      return () => {
        unsub();
      };
    },[]);
    
  // React.useEffect(() => {
  //   const q = query(collection(db, 'faculty/1'));
 
  //   const unsub = onSnapshot(q, (querySnapshot) => {
  //     let facultyArray = [];
  //     querySnapshot.forEach((doc) => {
  //       facultyArray.push({ ...doc.data(), id: doc.id });
  //     });
  //     setFaculty(facultyArray);
  //   });
  //   return () => {
  //     unsub();
    
  //   };
  // }, []);
  return (
    <>
    {/* <Box sx={{ width: '100%' }}>
      <Box sx={{ height: 350, width: '100%', mb: 1 }}>
        <DataGrid
          {...data}
          components={{
            Footer: CustomFooterStatusComponent,
          }}
          componentsProps={{
            footer: { status },
          }}
        />
      </Box>
      <Button
        variant="contained"
        onClick={() =>
          setStatus((current) =>
            current === 'connected' ? 'disconnected' : 'connected',
          )
        }
      >
        {status === 'connected' ? 'Disconnect' : 'Connect'}
      </Button>
    </Box> */}
          <StyledTable className="flex flex-1 justify-center ">
            <TableHead>
              <THead>
                <TableCell>Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Time-Table</TableCell>

              </THead>
            </TableHead>
            <TableBody>
              
                <TRow >
                  <TableCell>1</TableCell>
                  <TableCell>Prakash</TableCell>
                  <TableCell>Parmar</TableCell>
                  <TableCell>prakash.parmar@vit.edu.in</TableCell>
                  <TableCell>CMPN</TableCell>
                  <TableCell>
                  {faculty.map((faculty) => (
                    <CustomFooterStatusComponent status={faculty.status}/>
                  ))}
                  </TableCell>
                  <TableCell>
                    <CLink to="/Teacher/1">
                      View
                    </CLink>                    
                  </TableCell>                
                </TRow>
                <TRow >
                  <TableCell>2</TableCell>
                  <TableCell>Divya</TableCell>
                  <TableCell>Nimbalkar</TableCell>
                  <TableCell>divya.nimbalkar@vit.edu.in</TableCell>
                  <TableCell>CMPN</TableCell>
                  <TableCell>
                  {faculty2.map((faculty2) => (
                    <CustomFooterStatusComponent status={faculty2.status}/>
                  ))}
                  </TableCell> 
                  <TableCell>
                    <CLink to="/Teacher/2">
                      View
                    </CLink>                    
                  </TableCell>                     
                </TRow>
                <TRow >
                  <TableCell>3</TableCell>
                  <TableCell>Sachin</TableCell>
                  <TableCell>Bojewar</TableCell>
                  <TableCell>sachin.bojewar@vit.edu.in</TableCell>
                  <TableCell>CMPN</TableCell>
                  <TableCell>
                  {faculty3.map((faculty3) => (
                    <CustomFooterStatusComponent status={faculty3.status}/>
                  ))}
                  </TableCell> 
                  <TableCell>
                    <CLink to="/Teacher/3">
                     View
                    </CLink>                    
                  </TableCell>                     
                </TRow>
             
            </TableBody>
          </StyledTable>
    </>
  );
}