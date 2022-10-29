import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

// import { useDemoData } from '@mui/x-data-grid-generator';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import {Table,TableHead, TableCell, TableRow, TableBody, styled,} from "@mui/material";

import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
  width: 90%;
  display: block;
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

export default function TeacherTable(props) {
  // const [status, setStatus] = React.useState('connected');
  // const { data } = useDemoData({
  //   dataSet: 'Employee',
  //   rowLength: 4,
  //   maxColumns: 6,
  // });

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
          <StyledTable className="sm:ml-2 md:ml-6 ml-2">
          {/* <Table className=" block overflow-visible sm:ml-2 md:ml-6 w-5/6 mt-8   ml-2 mr-6 "> */}
            <TableHead>
              <THead>
                <TableCell>Time</TableCell>
                <TableCell>Monday</TableCell>
                <TableCell>Tuesday</TableCell>
                <TableCell>Wednesday</TableCell>
                <TableCell>Thursday</TableCell>
                <TableCell>Friday</TableCell>
               

              </THead>
            </TableHead>
            <TableBody>
                <TRow >
                  <TableCell>9:00am-11:00am</TableCell>
                  <TableCell>FE-INFT-A/M-203</TableCell>
                  <TableCell>TE-CMPN-B/M-312</TableCell>
                  <TableCell>FE-CMPN-A/M-203</TableCell>
                  <TableCell>SE-INFT-B/E-202</TableCell>
                  {/* <TableCell>
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
                  </TableCell> */}
                  <TableCell>
                    {/* <CLink to="/Teacher">
                      Link
                    </CLink>                     */}
                  </TableCell>                
                </TRow>
                <TRow >
                  <TableCell>11:15am-1:15pm</TableCell>
                  <TableCell>SE-CMPN-A/M-202</TableCell>
                  <TableCell>TE-CMPN-B/M-313</TableCell>
                  <TableCell></TableCell>
                  <TableCell>SE-INFT-A/M-202</TableCell>
                  {/* <TableCell>
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
                  </TableCell>  */}
                  <TableCell>
                    BE-CMPN-A /M-206                  
                  </TableCell>                     
                </TRow>
                <TRow >
                  <TableCell>9:00am-11:00am</TableCell>
                  <TableCell>FE-INFT-A/M-203</TableCell>
                  <TableCell>TE-CMPN-B/M-312</TableCell>
                  <TableCell>FE-CMPN-A/M-203</TableCell>
                  <TableCell>SE-INFT-B/E-202</TableCell>
                  {/* <TableCell>
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
                  </TableCell> */}
                  <TableCell>
                    {/* <CLink to="/Teacher">
                      Link
                    </CLink>                     */}
                  </TableCell>                
                </TRow>
                <TRow >
                  <TableCell>9:00am-11:00am</TableCell>
                  <TableCell>FE-INFT-A/M-203</TableCell>
                  <TableCell>TE-CMPN-B/M-312</TableCell>
                  <TableCell>FE-CMPN-A/M-203</TableCell>
                  <TableCell>SE-INFT-B/E-202</TableCell>
                  {/* <TableCell>
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
                  </TableCell> */}
                  <TableCell>
                    {/* <CLink to="/Teacher">
                      Link
                    </CLink>                     */}
                  </TableCell>                
                </TRow>
                <TRow >
                  <TableCell>9:00am-11:00am</TableCell>
                  <TableCell>FE-INFT-A/M-203</TableCell>
                  <TableCell>TE-CMPN-B/M-312</TableCell>
                  <TableCell>FE-CMPN-A/M-203</TableCell>
                  <TableCell>SE-INFT-B/E-202</TableCell>
                  {/* <TableCell>
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
                  </TableCell> */}
                  <TableCell>
                    {/* <CLink to="/Teacher">
                      Link
                    </CLink>                     */}
                  </TableCell>                
                </TRow>
            </TableBody>
          </StyledTable>
    </>
  );
}