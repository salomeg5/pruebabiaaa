import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  CssBaseline,
  Link,
  Box
} from '@mui/material';
import Logo from '../assets/logo_bia.png';

const LoginPage: React.FC = () => {
  return (
    <Grid container style={{ minHeight: '100vh' }}>
      <CssBaseline />
      <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center" style={{ padding: 20 }}>
        <Paper elevation={6} style={{ padding: 30, maxWidth: 400, width: '100%', display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Box mb={2}>
            <img src={Logo} alt="Logo" width="100" /> {/* Ajusta el tamaño según sea necesario */}
          </Box>
          <Typography variant="h5" component="h1" gutterBottom>
            Iniciar Sesión
          </Typography>
          <TextField label="Usuario *" variant="outlined" fullWidth required margin="normal" />
          <TextField label="Contraseña *" type="password" variant="outlined" fullWidth required margin="normal" />
          <Button variant="contained" color="primary" fullWidth style={{ marginTop: 16 }}>
            INICIAR SESIÓN
          </Button>
          <Grid container justifyContent="space-between" style={{ marginTop: 8 }}>
            <Grid item>
              <Link href="#" variant="body2">
                ¿Olvidó su contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                ¿Olvidó su usuario?
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center" style={{ padding: 20 }}>
        {/* Panel de Bienvenida */}
        <Paper elevation={6} style={{ padding: 30, maxWidth: 400, width: '100%' }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Bienvenido
          </Typography>
          <Typography variant="body1" style={{ marginBottom: 20 }}>
            Este es nuestro portal de trámites en línea un sistema fácil de usar, ágil y sencillo para el control general de solicitudes y requerimientos ambientales en el departamento del Meta.
          </Typography>
          <Button variant="outlined" fullWidth style={{ marginBottom: 16 }}>
            REGÍSTRESE
          </Button>
          <Typography variant="body2">
            Si tiene algún reclamo o solicitud, ingrese a PQR en línea Número de atención: Línea nacional 01-8000-51847095 Email: pqrds@cormacarena.gov.co
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
