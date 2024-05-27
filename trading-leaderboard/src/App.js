import React from 'react';
import Navbar from './components/Navbar'
import Leaderboard from './components/LeaderBoard'
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './components/Theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Leaderboard />
        </ThemeProvider>
    );
};

export default App;