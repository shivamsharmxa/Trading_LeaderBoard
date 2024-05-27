import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(226, 116, 152)', // Pink color
        },
        secondary: {
            main: '#0d6efd', // Blue color
        },
        background: {
            default: '#ffffff', // White background
        },
        text: {
            primary: '#000000', // Black text
            secondary: '#ffffff', // White text
        },
    },
    typography: {
        h3: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#0d6efd',
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: '500',
            color: 'rgb(226, 116, 152)',
        },
    },
});

export default theme;


