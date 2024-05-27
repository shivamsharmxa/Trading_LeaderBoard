import React from 'react';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

const Leaderboard = () => {
    const users = [
        { rank: 1, name: 'John Doe', calmarRatio: 1.2, overallProfit: '$5000', avgDailyProfit: '$200', winPercentage: '75%', price: '$100', action: 'View' },
        { rank: 2, name: 'Jane Smith', calmarRatio: 1.1, overallProfit: '$4500', avgDailyProfit: '$180', winPercentage: '70%', price: '$90', action: 'View' },
        // Add more user data as needed
    ];

    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                Leaderboards
            </Typography>
            <Paper elevation={3} style={{ padding: 20 }}>
                <Typography variant="h5" gutterBottom>
                    Basic Backtests
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow style={{ backgroundColor: '#0d6efd' }}>
                                <TableCell style={{ color: '#ffffff' }}>Rank</TableCell>
                                <TableCell style={{ color: '#ffffff' }}>Name</TableCell>
                                <TableCell style={{ color: '#ffffff' }}>Calmar Ratio</TableCell>
                                <TableCell style={{ color: '#ffffff' }}>Overall Profit</TableCell>
                                <TableCell style={{ color: '#ffffff' }}>Average Daily Profit</TableCell>
                                <TableCell style={{ color: '#ffffff' }}>Win Percentage</TableCell>
                                <TableCell style={{ color: '#ffffff' }}>Price</TableCell>
                                <TableCell style={{ color: '#ffffff' }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user, index) => (
                                <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#ffffff' }}>
                                    <TableCell style={{ color: '#000000' }}>{user.rank}</TableCell>
                                    <TableCell style={{ color: '#000000' }}>{user.name}</TableCell>
                                    <TableCell style={{ color: '#000000' }}>{user.calmarRatio}</TableCell>
                                    <TableCell style={{ color: '#000000' }}>{user.overallProfit}</TableCell>
                                    <TableCell style={{ color: '#000000' }}>{user.avgDailyProfit}</TableCell>
                                    <TableCell style={{ color: '#000000' }}>{user.winPercentage}</TableCell>
                                    <TableCell style={{ color: '#000000' }}>{user.price}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary">
                                            {user.action}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
};

export default Leaderboard;


