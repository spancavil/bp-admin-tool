import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import DropTabs from './Components/TabPanel';

const Form = () => {

    const navigate = useNavigate();

    return (
        <Box sx={{
            width: '100vw',
            minHeight: '100vh',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Paper elevation={3} sx={{
                height: '100%',
                width: '100%',
                diplay: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '20px',
            }}>
                <Button color="primary" variant="contained" onClick={()=> navigate('/')}>
                    Go back
                </Button>
                <Typography align={"center"} variant="h4">
                    Drop create
                </Typography>
                <DropTabs/>
            </Paper>
        </Box>
    )
}

export default Form