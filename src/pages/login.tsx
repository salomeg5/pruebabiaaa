import React from 'react';
import {
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    Link,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Logo from '../assets/logo_bia.png';

const GradientDivider = styled('div')({
    height: '4px',
    width: '80%', // El degradado cubre el 80% del ancho para permitir el desvanecimiento a los bordes
    backgroundImage: 'linear-gradient(to right, transparent, rgba(0, 128, 0, 1) 20%, rgba(0, 102, 204, 1) 80%, transparent)',
    margin: '0 auto', // Centrar el divider horizontalmente
});

const LoginPage: React.FC = () => {
    return (
        <Container component="main" sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
            <CssBaseline />
            <Paper elevation={6} sx={{
                borderRadius: '16px',
                width: 699, // Ancho del paper
                height: 516, // Alto del paper
                mx: 'auto', // Centrar el paper horizontalmente
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative', // Para posicionar absolutamente el divider
                overflow: 'hidden', // Para los bordes redondeados
            }}>
                <Box sx={{ textAlign: 'center', my: 2 }}>
                    <img src={Logo} alt="Logo Bia" width="100" />
                </Box>
                <GradientDivider />
                <Grid container spacing={2} sx={{ p: 3, width: '100%',}}>
                    <Grid item xs={12} sm={6} container direction="column" alignItems="center" sx={{ gap: 1, mt:5, }}>
                        <TextField
                            label="Usuario"
                            variant="outlined"
                            fullWidth
                            required
                            size="small"
                            sx={{ width: '80%', my: 1 }} // Ajuste de los márgenes superior e inferior
                        />
                        <TextField
                            label="Contraseña"
                            type="password"
                            variant="outlined"
                            fullWidth
                            required
                            size="small"
                            sx={{ width: '80%', my: 1 }} // Ajuste de los márgenes superior e inferior
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                mt: 1,
                                width: '80%',
                            }}
                        >
                            INICIAR SESIÓN
                        </Button>
                        <Link href="#" variant="body2" sx={{ mt: 1, width: '80%', display: 'flex', justifyContent: 'center' }}>
                                ¿Olvidó su contraseña?
                            </Link>
                            <Link href="#" variant="body2" sx={{ mt: 1, width: '80%', display: 'flex', justifyContent: 'center' }}>
                                ¿Olvidó su usuario?
                            </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={0} sx={{
                            p: 2,
                            borderRadius: '16px',
                            backgroundColor: '#E3F2FD', // Un tono azul claro
                            textAlign: 'center', // Centrar texto
                            height: '100%', // Asegurar altura completa
                        }}>
                            <Typography variant="body2" gutterBottom>
                                Bienvenido
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Este es nuestro portal de trámites en línea un sistema fácil de usar, ágil y sencillo para el control general de solicitudes y requerimientos ambientales en el departamento del Meta.
                            </Typography>
                            <Button variant="outlined" sx={{ mt: 3, borderColor: 'primary.dark', color: 'primary.dark' }}>
                                REGÍSTRESE
                            </Button>
                            <Typography variant="body2" gutterBottom sx={{ mt: 3, fontStyle: 'italic' }}>
                                Si tiene algún reclamo o solicitud, ingrese a PQR en línea Número de atención: Línea nacional 01-8000-51847095 Email: pqrds@cormacarena.gov.co
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default LoginPage;
