import React, { useState } from 'react';
import {
  Box,
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
import Logo from '../assets/logo_bia.png';

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
        <Typography variant="h6" gutterBottom>
          Registrar Nuevo Usuario
        </Typography>
        <form onSubmit={handleSubmit} key="registro-form">
          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel id="tipo-persona-label">Tipo de persona *</InputLabel>
            <Select
              labelId="tipo-persona-label"
              id="tipo-persona-select"
              value={tipoDePersona}
              label="Tipo de persona *"
              onChange={handleTipoDePersonaChange}
            >
              {tiposDePersona.map((option) => (
                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel id="tipo-documento-label">Tipo de documento *</InputLabel>
            <Select
              labelId="tipo-documento-label"
              id="tipo-documento-select"
              value={tipoDeDocumento}
              label="Tipo de documento *"
              onChange={handleTipoDeDocumentoChange}
            >
              {tiposDeDocumento.map((option) => (
                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Número de documento *"
            value={numeroDeDocumento}
            onChange={handleNumeroDeDocumentoChange}
            type="number"
            sx={{ my: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
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