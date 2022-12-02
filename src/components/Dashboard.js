import {  createTheme, ThemeProvider } from "@mui/material/styles";
import Box  from "@mui/material/Box"
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// import Toolbar from "@mui/material/Toolbar";

// images 
import CMPN from '../components/Images/departments/CMPN2.png'
import IT from '../components/Images/departments/IT2.png'
import EXTC from '../components/Images/departments/EXTC2.png'
import ETRX from '../components/Images/departments/ETRX2.png'
import BIOM from '../components/Images/departments/BIOM2.png'



export default function Dashboard(props){

    const navigate = useNavigate(); 

    const mdTheme = createTheme();


    return(
        <ThemeProvider theme={mdTheme}>
    
        <Box
          component="main"
          sx={{

            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
        }}
        >
          <Container sx={{ mt: 2, mb: 2 }}>
            <Grid container spacing={3}>
         
              <Grid item md={4} lg={4} sm={6} xs={6}>
                <Paper
                  sx={{ 
                      cursor: "pointer",
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 200,
                      backgroundImage: `url(${CMPN})`,
                      backgroundSize: "260px",
                      backgroundPosition: " bottom 10px center",
                    }}
                    onClick={() => navigate(props.cmpn)} // navigate("/StateAdmin/Dashboard/verify")
                    >
                  <Typography
                    variant="caption"
                    align="center"
                    sx={{
                        fontSize: 25,
                    }}
                    >
                   
                  </Typography>
                  {/* <SchoolDetails/> */}
                </Paper>
              </Grid>

              <Grid item md={4} lg={4} sm={6} xs={6}>
                <Paper
                  sx={{
                      p: 2,
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      height: 200,
                      backgroundImage: `url(${IT})`,
                      backgroundPosition: "bottom -15px center",
                      backgroundSize: "360px",
                    }}
                    onClick={() => navigate(props.it)} // navigate("/StateAdmin/Dashboard/verify")
                    >
                  <Typography
                    variant="caption"
                    align="center"
                    sx={{
                        fontSize: 25,
                    }}
                    >
                   
                  </Typography>
                  {/* <SchoolDetails/> */}
                </Paper>
              </Grid>

              <Grid item md={4} lg={4} sm={6} xs={6}>
                <Paper
                  sx={{
                      p: 2,
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      height: 200,
                      backgroundImage: `url(${EXTC})`,
                      backgroundPosition: "bottom 1px center",
                      backgroundSize: "300px",
                    }}
                    onClick={() => navigate(props.extc)} // navigate("/StateAdmin/Dashboard/verify")
                    >
                  <Typography
                    variant="caption"
                    align="center"
                    sx={{
                        fontSize: 25,
                    }}
                    >
                    
                  </Typography>
                  {/* <SchoolDetails/> */}
                </Paper>
              </Grid>

              <Grid item md={4} lg={4} sm={6} xs={6}>
                <Paper
                  sx={{
                     
                      p: 2,
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      height: 200,
                      backgroundImage: `url(${ETRX})`,
                      backgroundSize: "400px",
                      backgroundPosition: "bottom -20px center",
                    }}
                    onClick={() => navigate(props.etrx)} // navigate("/StateAdmin/Dashboard/verify")
                    >
                  <Typography
                    variant="caption"
                    align="center"
                    sx={{
                        fontSize: 25,
                    }}
                    > 

                  </Typography>
                  {/* <SchoolDetails/> */}
                </Paper>
              </Grid>
              <Grid item md={4} lg={4} sm={6} xs={12}>
                <Paper
                  sx={{
                    
                      p: 2,
                      cursor: "pointer",

                      display: "flex",
                      flexDirection: "column",
                      height: 200,
                    backgroundImage: `url(${BIOM})`,
                    backgroundSize: "400px ",
                    backgroundPosition: "bottom -20px center",
                }}
                onClick={() => navigate(props.biom)} // navigate("/StateAdmin/Dashboard/verify")
                >
                  <Typography
                    variant="caption"
                    align="center"
                    sx={{
                        fontSize: 25,
                    }}
                    >

                  </Typography>
                  {/* <SchoolDetails/> */}
                </Paper>
              </Grid>         
            </Grid>
          </Container>
        </Box>
    </ThemeProvider>
        
    )
}