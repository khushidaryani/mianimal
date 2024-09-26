import React from 'react'
import { Button, Typography, Box, Paper, TextField, Container } from '@mui/material';
import Grid from '@mui/material/Grid2'
import { useState } from 'react'


function FormRegistro() {
    const [data, setData] = useState({ name: '', breed: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Acciones al enviar el formulario
    };

    const handleChangeName = (e) => {
        setData({
            ...data,
            name: e.target.value,
        });
    };

    const handleChangeBreed = (e) => {
        setData({
            ...data,
            breed: e.target.value,
        });
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Paper elevation={4} square sx={{ p: 4, borderRadius: '8px', border: '1px solid #76524a' }}>
                <Typography variant="h5" color="textPrimary" sx={{ mb: 3, color: '#76524a' }}>
                    Registra tu mascota
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid xs={12} sm={6}>
                            <TextField
                                required
                                label="Nombre Mascota"
                                variant="outlined"
                                fullWidth
                                value={data.name}
                                onChange={handleChangeName}
                                sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#76524a' } }}
                            />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <TextField
                                label="Raza"
                                variant="outlined"
                                fullWidth
                                value={data.breed}
                                onChange={handleChangeBreed}
                                sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#76524a' } }}
                            />
                        </Grid>
                        <Grid xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{
                                    mt: 2,
                                    backgroundColor: '#76524a',
                                    '&:hover': {
                                        backgroundColor: '#5e423d',
                                    },
                                }}
                            >
                                Registrar
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
            <br /><br /><br /><br />
        </Container>
    )
}

export default FormRegistro