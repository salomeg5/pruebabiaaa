import React from 'react';
import { useNavigate } from 'react-router-dom';
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

type LoginType = {
    username: string;
    password: string;
};

const LoginPage: React.FC = () => {
    const [loginData, setLoginData] = React.useState<LoginType>({ username: "", password: "" });
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(loginData);
    };

    return (
        <Container component="main" sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
            <CssBaseline />
            <Paper elevation={6} sx={{
                borderRadius: '16px',
                width: 699,
                height: 516,
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}>
                <Box sx={{ textAlign: 'center', my: 2 }}>
                    <img src={Logo} alt="Logo Bia" width="100" />
                </Box>
                <GradientDivider />
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <Grid container spacing={2} sx={{ p: 3 }}>
                        <Grid item xs={12} sm={6} container direction="column" alignItems="center" sx={{ gap: 1, mt: 5 }}>
                            <TextField
                                label="Usuario"
                                name="username"
                                type="email"
                                variant="outlined"
                                fullWidth
                                required
                                size="small"
                                sx={{ width: '80%', my: 1 }}
                                onChange={handleInputChange}
                            />
                            <TextField
                                label="Contraseña"
                                name="password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                required
                                size="small"
                                sx={{ width: '80%', my: 1 }}
                                onChange={handleInputChange}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ mt: 1, width: '80%' }}
                            >
                                INICIAR SESIÓN
                            </Button>
                            <Box sx={{ mt: 1, width: '80%', textAlign: 'center' }}>
                                <Link href="#" variant="body2">
                                    ¿Olvidó su contraseña?
                                </Link>
                                <br />
                                <Link href="#" variant="body2">
                                    ¿Olvidó su usuario?
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ textAlign: 'center', p: 2 }}>
                            <Paper elevation={0} sx={{
                                p: 2,
                                borderRadius: '16px',
                                backgroundColor: '#E3F2FD', // Un tono azul claro
                                height: '100%', // Asegurar altura completa
                                display: 'flex', // Añadido para disponer los elementos internos en columna
                                flexDirection: 'column', // Añadido para disponer los elementos internos en columna
                                justifyContent: 'center', // Añadido para centrar verticalmente en caso de que sea necesario
                            }}>
                                <Typography variant="body2" gutterBottom>
                                    Bienvenido
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Este es nuestro portal de trámites en línea un sistema fácil de usar, ágil y sencillo para el control general de solicitudes y requerimientos ambientales en el departamento del Meta.
                                </Typography>
                                <Button
                                    variant="outlined"
                                    sx={{ mt: 3, borderColor: 'primary.dark', color: 'primary.dark' }}
                                    onClick={() => navigate('/register')}
                                >
                                    REGÍSTRESE
                                </Button>
                                <Typography variant="caption" sx={{ mt: 2, fontStyle: 'italic' }}>
                                    Si tiene algún reclamo o solicitud, ingrese a PQR en línea Número de atención: Línea nacional 01-8000-51847095 Email: pqrds@cormacarena.gov.co
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default LoginPage;
