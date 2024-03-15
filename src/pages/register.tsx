import React, { useState } from 'react';
import {
    Box,
    Grid,
    Button,
    Container,
    CssBaseline,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Logo from '../assets/logo_bia.png';

const GradientDivider = styled('div')(({ theme }) => ({
    height: '4px',
    width: '80%',
    backgroundImage: 'linear-gradient(to right, transparent, rgba(0, 128, 0, 1) 20%, rgba(0, 102, 204, 1) 80%, transparent)',
    margin: `${theme.spacing(2)} auto ${theme.spacing(4)} auto`, // Añade un margen inferior de 4 unidades de espacio
  }));
  

const tiposDePersona = [
    { value: 'natural', label: 'Persona Natural' },
    { value: 'juridica', label: 'Persona Jurídica' },
];

const tiposDeDocumento = [
    { value: 'cc', label: 'Cédula de Ciudadanía' },
    { value: 'ti', label: 'Tarjeta de Identidad' },
];

const RegistroPage: React.FC = () => {
    const [tipoDePersona, setTipoDePersona] = useState('');
    const [tipoDeDocumento, setTipoDeDocumento] = useState('');
    const [numeroDeDocumento, setNumeroDeDocumento] = useState('');

    const handleTipoDePersonaChange = (event: SelectChangeEvent<string>) => {
        setTipoDePersona(event.target.value);
    };

    const handleTipoDeDocumentoChange = (event: SelectChangeEvent<string>) => {
        setTipoDeDocumento(event.target.value);
    };

    const handleNumeroDeDocumentoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumeroDeDocumento(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aquí manejarías el envío del formulario
        console.log({
            tipoDePersona,
            tipoDeDocumento,
            numeroDeDocumento,
        });
    };
    return (
        <Container component="main" sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
            <CssBaseline />
            <Paper elevation={6} sx={{ padding: 4, display: 'flex', flexDirection: 'column', borderRadius: '16px', mx: 'auto' }}>
                <Box sx={{ textAlign: 'center', my: 2 }}>
                    <img src={Logo} alt="Logo Bia" width="100" />
                </Box>
                <GradientDivider />
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel id="tipo-persona-label">Tipo de persona</InputLabel>
                                <Select
                                    labelId="tipo-persona-label"
                                    id="tipo-persona-select"
                                    value={tipoDePersona}
                                    label="Tipo de persona"
                                    onChange={handleTipoDePersonaChange}
                                >
                                    {tiposDePersona.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel id="tipo-documento-label">Tipo de documento</InputLabel>
                                <Select
                                    labelId="tipo-documento-label"
                                    id="tipo-documento-select"
                                    value={tipoDeDocumento}
                                    label="Tipo de documento"
                                    onChange={handleTipoDeDocumentoChange}
                                >
                                    {tiposDeDocumento.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                label="Número de documento"
                                value={numeroDeDocumento}
                                onChange={handleNumeroDeDocumentoChange}
                                type="number"
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button variant="outlined" sx={{ mr: 1 }}>
                            BUSCAR
                        </Button>
                        <Button type="submit" variant="contained" sx={{ ml: 1 }}>
                            INICIO
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};


export default RegistroPage;