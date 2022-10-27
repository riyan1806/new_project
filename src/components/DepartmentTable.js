import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid } from '@mui/x-data-grid';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import {Table,TableHead, TableCell, TableRow, TableBody, Button, styled,} from "@mui/material";

import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
  background: ;
  width: 90%;

  overflow: auto;

  margin-top: 50px;
  margin-left: 50px;

  
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



function CustomFooterStatusComponent(props) {
  return (
    <Box sx={{ p: 1, display: 'flex' }}>
      <FiberManualRecordIcon
        fontSize="small"
        sx={{
          mr: 1,
          color: props.status === 'connected' ? '#4caf50' : '#d9182e',
        }}
      />
      Status {props.status}
    </Box>
  );
}

CustomFooterStatusComponent.propTypes = {
  status: PropTypes.oneOf(['connected', 'disconnected']).isRequired,
};

export { CustomFooterStatusComponent };

export default function DepartmentTable(props) {
  const [status, setStatus] = React.useState('connected');
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 4,
    maxColumns: 6,
  });

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
              </THead>
            </TableHead>
            <TableBody>
                <TRow >
                  <TableCell>1</TableCell>
                  <TableCell>Amit</TableCell>
                  <TableCell>Nerurkar</TableCell>
                  <TableCell>amit.nerurkar@vit.edu.in</TableCell>
                  <TableCell>CMPN</TableCell>
                  <TableCell>
                    <Box sx={{ p: 1, display: 'flex' }}>
                      <FiberManualRecordIcon
                        fontSize="small"
                        sx={{
                          mr: 1,
                          color: props.status === 'connected' ? '#4caf50' : '#d9182e',
                        }}
                      />
                      Absent {props.status}
                    </Box>
                  </TableCell>                
                </TRow>
                <TRow >
                  <TableCell>2</TableCell>
                  <TableCell>Sachin</TableCell>
                  <TableCell>Bojewar</TableCell>
                  <TableCell>sachin.bojewar@vit.edu.in</TableCell>
                  <TableCell>CMPN</TableCell>
                  <TableCell>
                    <Box sx={{ p: 1, display: 'flex' }}>
                      <FiberManualRecordIcon
                        fontSize="small"
                        sx={{
                          mr: 1,
                          color: '#4caf50' ,
                        }}
                      />
                      Present {props.status}
                    </Box>
                  </TableCell>                
                </TRow>
             
            </TableBody>
          </StyledTable>
    </>
  );
}