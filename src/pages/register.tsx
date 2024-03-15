import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    CssBaseline,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Select,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    TextField,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material';
import Logo from '../assets/logo_bia.png';

const GradientDivider = styled('div')(({ theme }) => ({
    height: '4px',
    width: '80%',
    backgroundImage: 'linear-gradient(to right, transparent, rgba(0, 128, 0, 1) 20%, rgba(0, 102, 204, 1) 80%, transparent)',
    margin: `${theme.spacing(2)} auto ${theme.spacing(4)} auto`,
}));

const tiposDePersona = [
    { value: 'natural', label: 'Persona Natural' },
    { value: 'juridica', label: 'Persona Jurídica' },
];

const tiposDeDocumento = [
    { value: 'cc', label: 'Cédula de Ciudadanía' },
    { value: 'ti', label: 'Tarjeta de Identidad' },
];
const scrollToStepper = () => {
    const stepperElement = document.getElementById('stepperId');
    if (stepperElement) {
        stepperElement.scrollIntoView({ behavior: 'smooth' });
    }
};

const RegistroPage: React.FC = () => {
    const [tipoDePersona, setTipoDePersona] = useState('');
    const [tipoDeDocumento, setTipoDeDocumento] = useState('');
    const [numeroDeDocumento, setNumeroDeDocumento] = useState('');
    const [showStepper, setShowStepper] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [surname, setSurname] = useState('');
    const [secondSurname, setSecondSurname] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [countryOfBirth, setCountryOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const steps = [
        'Datos básicos',
        'Datos de residencia',
        'Datos de notificación',
        'Datos adicionales (opcionales)',
        'Autorización de notificación y tratamiento de datos',
        'Datos de acceso',
    ];

    const handleTipoDePersonaChange = (event: SelectChangeEvent<string>) => {
        setTipoDePersona(event.target.value);
    };

    const handleTipoDeDocumentoChange = (event: SelectChangeEvent<string>) => {
        setTipoDeDocumento(event.target.value);
    };

    const handleNumeroDeDocumentoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumeroDeDocumento(event.target.value);
    };

    const handleBuscarClick = () => {
        // Aquí podrías añadir lógica adicional antes de mostrar el stepper
        setShowStepper(true);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log({
            tipoDePersona,
            tipoDeDocumento,
            numeroDeDocumento,
        });
        // Mostrar stepper después del envío si es necesario
        setShowStepper(true);
    };

    return (
        <Container component="main" sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
            <CssBaseline />
            <Paper elevation={6} sx={{
                padding: 4, display: 'flex', flexDirection: 'column', borderRadius: '16px', mx: 'auto', mt: 25,
            }}>
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
                                    sx={{
                                        width: '300px',
                                        height: '50px',
                                    }}
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
                                    sx={{
                                        width: '300px', 
                                        height: '50px',
                                    }}
                                >
                                    {tiposDeDocumento.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                sx={{
                                    width: '300px', 
                                    height: '50px', 
                                }}
                                label="Número de documento"
                                value={numeroDeDocumento}
                                onChange={handleNumeroDeDocumentoChange}
                                type="number"
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button variant="outlined" sx={{ mr: 1 }} onClick={handleBuscarClick}>
                            BUSCAR
                        </Button>
                        <Button type="submit" variant="contained" sx={{ ml: 1 }}>
                            INICIO
                        </Button>
                    </Box>
                </form>
                {showStepper && (
                    <Stepper
                        activeStep={activeStep}
                        orientation="vertical"
                        sx={{
                            padding: 4, display: 'flex', flexDirection: 'column', borderRadius: '16px', mx: 'auto'
                        }}
                    >
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    {index === 0 && (
                                        <Grid container spacing={2}>
                                            {/* Primer nombre */}
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    label="Primer nombre"
                                                    fullWidth
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                />
                                            </Grid>
                                            {/* Segundo nombre */}
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    label="Segundo nombre"
                                                    fullWidth
                                                    value={secondName}
                                                    onChange={(e) => setSecondName(e.target.value)}
                                                />
                                            </Grid>
                                            {/* Primer apellido */}
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    label="Primer apellido"
                                                    fullWidth
                                                    value={surname}
                                                    onChange={(e) => setSurname(e.target.value)}
                                                />
                                            </Grid>
                                            {/* Segundo apellido */}
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    label="Segundo apellido"
                                                    fullWidth
                                                    value={secondSurname}
                                                    onChange={(e) => setSecondSurname(e.target.value)}
                                                />
                                            </Grid>
                                            {/* Fecha de nacimiento */}
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    label="Fecha de nacimiento"
                                                    type="date"
                                                    fullWidth
                                                    value={birthDate}
                                                    onChange={(e) => setBirthDate(e.target.value)}
                                                    InputLabelProps={{ shrink: true }}
                                                />
                                            </Grid>
                                            {/* País de nacimiento */}
                                            <Grid item xs={12} sm={6}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="country-of-birth-label">País de nacimiento</InputLabel>
                                                    <Select
                                                        labelId="country-of-birth-label"
                                                        value={countryOfBirth}
                                                        label="País de nacimiento"
                                                        onChange={(e) => setCountryOfBirth(e.target.value)}
                                                    >
                                                        {/* Add MenuItems for each country */}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            {/* Género */}
                                            <Grid item xs={12} sm={6}>
                                                <FormControl component="fieldset">
                                                    <FormLabel component="legend">Género</FormLabel>
                                                    <RadioGroup
                                                        row
                                                        aria-label="gender"
                                                        name="row-radio-buttons-group"
                                                        value={gender}
                                                        onChange={(e) => setGender(e.target.value)}
                                                    >
                                                        <FormControlLabel value="female" control={<Radio />} label="Femenino" />
                                                        <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                                                        {/* Add more options if necessary */}
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                            {/* Estado civil */}
                                            <Grid item xs={12} sm={6}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="marital-status-label">Estado civil</InputLabel>
                                                    <Select
                                                        labelId="marital-status-label"
                                                        value={maritalStatus}
                                                        label="Estado civil"
                                                        onChange={(e) => setMaritalStatus(e.target.value)}
                                                    >
                                                        {/* Add MenuItems for each marital status */}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    )}
                                    {/* Add other step contents */}
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                                                Atrás
                                            </Button>
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {activeStep === steps.length - 1 ? 'Finalizar' : 'Continuar'}
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                )}
            </Paper>
        </Container>
    );
};

export default RegistroPage;
