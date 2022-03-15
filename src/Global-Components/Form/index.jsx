import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const Form = () => {
    return (
        <Box sx={{
            width: '100vw',
            height: '100vh',
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
                <Typography align={"center"}>
                    Drop create
                </Typography>

            </Paper>
        </Box>
    )
}

export default Form