import * as React from 'react';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import PageListItems from 'components/navLinks';
import NavBar from 'components/NavBar';
import { Card, CardActionArea, CardContent, CardMedia, Chip, Paper, Typography } from '@mui/material';
import { MuiModal } from 'components/muiModal';
import { fontWeight } from '@mui/system';



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


                <Box sx={{ bgcolor: 'turquoise', height: '80vh', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px', display: 'flex', }}>
                    {/* <Box
                        sx={{
                            width: 500,
                            height: 500,
                            backgroundColor: '#87CEFA',
                            opacity: [0.9, 0.8, 0.7],
                            '&:hover': {
                                backgroundColor: '#87CEFA',
                                opacity: [1, 2, 1]
                            },
                            borderRadius: '12px'
                        }}
                    /> */}
                    <Container maxWidth="xxl" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: 2 }}>
                        <Box
                            sx={{
                                flexGrow: 1,
                                flexBasis: 0,
                                height: 500,
                                // backgroundColor: '#87CEFA',
                                // opacity: [0.9, 0.8, 0.7],
                                // '&:hover': {
                                //     backgroundColor: '#87CEFA',
                                //     opacity: [1, 2, 1]
                                // },
                                borderRadius: '12px',
                                display: 'flex',
                                justifyContent: 'center'

                            }}
                        >
                            <Card sx={{ maxWidth: 345, backgroundColor: 'lightslategrey' }} onClick={() => setOpen(true)}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        // height="50vh"
                                        image={require("assets/images/nfkt.jpg")}
                                        alt="Nihal Farhan"
                                    />
                                    <CardContent sx={{ backgroundColor: 'inherit' }}>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                                            Nihal Farhan
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                                            An individual who is curious by nature.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <MuiModal isOpen={open} isClose={handleClose}>
                                <Container>
                                    <Box border={1} borderColor='turquoise' borderRadius={2} sx={{ p: 2, m: 2 }}>
                                    <Typography variant="h4" component="h2">
                                        Technologies
                                    </Typography>
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
                                </Container>
                            </MuiModal>

                            <Paper elevation={3} sx={{ width: "30%", backgroundColor: "lightslategrey", color: 'turquoise', display: { xs: 'none', md: 'inline-block' } }} >
                                <Container><Box border={1} borderColor='turquoise' borderRadius={2} sx={{ p: 2, m: 2 }}>
                                    <Typography variant="h4" component="h2">
                                        Profile
                                    </Typography>
                                    <Typography variant="h6" component="div">
                                        Nihal Farhan
                                    </Typography>
                                    <Typography variant="h6" component="div">
                                        Fullstack web developer
                                    </Typography>
                                </Box>
                                </Container>
                                <Container><Box border={1} borderColor='turquoise' borderRadius={2} sx={{ p: 2, m: 2 }}>
                                    <Typography variant="h4" component="h2">
                                        Technologies
                                    </Typography>
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
                                </Container>
                            </Paper>

                        </Box>
                    </Container>

                </Box>
            </Container >
        </>
    )
}

export default LoginView;