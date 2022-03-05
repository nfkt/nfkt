import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PageListItems from "components/navLinks";
import NavBar from "components/NavBar";
import {
  Avatar,
  Paper,
  Typography,
} from "@mui/material";
import { MuiModal } from "components/muiModal";
import { Chips } from "components/chips";
import { muiTheme } from "styles/muiTheme";
import { ThemeProvider } from "@emotion/react";

const LoginView = ({ pages, title }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Container maxWidth="xxl">
        <NavBar
          title={title}
          pages={pages}
          pageName="page"
          itemComponent={PageListItems}
        />
        <Container sx={{bgcolor:'primary.main'}}>
        <Box
          sx={{
            // bgcolor: 'primary.main',
            // bgcolor: "#5CDB95",
            height: "80vh",
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            display: "flex",
          }}
        >
          <Container
            maxWidth="xxl"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              gap: 2,
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                flexBasis: 0,
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  alt="Nihal Farhan"
                  src={require("assets/images/nfkt.jpg")}
                  sx={{ width: 200, height: 200 }}
                />
              </Box>
              <MuiModal isOpen={open} isClose={handleClose}>
                <Container>
                  <Box
                    border={1}
                    borderColor="turquoise"
                    borderRadius={2}
                    sx={{ p: 2, m: 2 }}
                  >
                    <Typography variant="h4" component="h2">
                      Technologies
                    </Typography>
                    <Container sx={{ ml: "1rem" }}>
                      <Chips chips={["React", "Redux"]} />
                    </Container>
                  </Box>
                </Container>
              </MuiModal>

              <Paper
                elevation={3}
                sx={{
                  flexGrow: 1,
                  backgroundColor: "secondary.main",
                  color: "turquoise",
                  display: { xs: "none", md: "inline" },
                }}
              >
                <Container>
                  <Box
                    border={1}
                    borderColor="#5CDB95"
                    borderRadius={2}
                    sx={{ p: 2, m: 2 }}
                  >
                    <Typography variant="h4" component="h2" sx={{color:'mainText.main'}}>
                      Profile
                    </Typography>
                    <Typography variant="h6" component="div" sx={{color:'mainText.main'}}>
                      Nihal Farhan
                    </Typography>
                    <Typography variant="h6" component="div" sx={{color:'mainText.main'}}>
                      Fullstack web developer
                    </Typography>
                  </Box>
                </Container>
                <Container>
                  <Box
                    border={1}
                    borderColor="#5CDB95"
                    borderRadius={2}
                    sx={{ p: 2, m: 2 }}
                  >
                    <Typography variant="h4" component="h2" sx={{color:'mainText.main'}}>
                      Technologies
                    </Typography>

                    <Chips chips={["React", "Redux"]} />
                  </Box>
                </Container>
              </Paper>
            </Box>
          </Container>
        </Box>
        </Container>
      </Container>
    </>
  );
};

export default LoginView;

{
  /* 
              <Container sx={{ ml: '1rem' }}>
                                        <Chip label="React" sx={{ backgroundColor: 'turquoise', fontSize: 'larger', color: 'lightslategray', fontWeight: 'bold', m: 1 }} />
                                        &nbsp;&nbsp;
                                        <Chip label="Redux" sx={{ backgroundColor: 'turquoise', fontSize: 'larger', color: 'lightslategray', fontWeight: 'bold', m: 1 }} />
                                        &nbsp;&nbsp;
                                        <Chip label="MUI" sx={{ backgroundColor: 'turquoise', fontSize: 'larger', color: 'lightslategray', fontWeight: 'bold', m: 1 }} />
                                        &nbsp;&nbsp;
                                        <Chip label="Axios" sx={{ backgroundColor: 'turquoise', fontSize: 'larger', color: 'lightslategray', fontWeight: 'bold', m: 1 }} />
                                        &nbsp;&nbsp;
                                        <Chip label="Sequelize" sx={{ backgroundColor: 'turquoise', fontSize: 'larger', color: 'lightslategray', fontWeight: 'bold', m: 1 }} />
                                        &nbsp;&nbsp;
                                        <Chip label="Express" sx={{ backgroundColor: 'turquoise', fontSize: 'larger', color: 'lightslategray', fontWeight: 'bold', m: 1 }} />
                                        &nbsp;&nbsp;
                                        <Chip label="Flutter" sx={{ backgroundColor: 'turquoise', fontSize: 'larger', color: 'lightslategray', fontWeight: 'bold', m: 1 }} />
                                        &nbsp;&nbsp;
                                        <Chip label="Scrapy" sx={{ backgroundColor: 'turquoise', fontSize: 'larger', color: 'lightslategray', fontWeight: 'bold', m: 1 }} />
                                    </Container> 
                  </Box>
*/
}
