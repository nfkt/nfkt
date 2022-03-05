import * as React from 'react';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import PageListItems from 'components/navLinks';
import NavBar from 'components/NavBar';



const HomeView = ({ pages, title }) => {

    return (
        <>
            <Container maxWidth="xxl">
                <NavBar 
                title = {title} 
                pages = {pages}
                pageName = "page"
                itemComponent={ PageListItems}
                />
                    

                <Box sx={{ bgcolor: '#cfe8fc', height: '80vh', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px' }}>
                    {/* Content to be given to the box */}
                </Box>
            </Container>
        </>
    )
}

export default HomeView;