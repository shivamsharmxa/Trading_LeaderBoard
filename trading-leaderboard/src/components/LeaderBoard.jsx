import React from 'react';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Tooltip as PieTooltip } from 'recharts';

const HeaderRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
}));

const ActionButton = styled(Button)(({ theme }) => ({
    fontWeight: 'bold',
}));

const Leaderboard = () => {
    const users = [
        { rank: 1, name: 'John Doe', calmarRatio: 1.2, overallProfit: '$5000', avgDailyProfit: '$200', winPercentage: '75%', price: '$100', action: 'View' },
        { rank: 2, name: 'Jane Smith', calmarRatio: 1.1, overallProfit: '$4500', avgDailyProfit: '$180', winPercentage: '70%', price: '$90', action: 'View' },
        { rank: 1, name: 'John Doe', calmarRatio: 1.2, overallProfit: '$5000', avgDailyProfit: '$200', winPercentage: '75%', price: '$100', action: 'View' },
        { rank: 2, name: 'Jane Smith', calmarRatio: 1.1, overallProfit: '$4500', avgDailyProfit: '$180', winPercentage: '70%', price: '$90', action: 'View' },
        { rank: 1, name: 'John Doe', calmarRatio: 1.2, overallProfit: '$5000', avgDailyProfit: '$200', winPercentage: '75%', price: '$100', action: 'View' },
        { rank: 2, name: 'Jane Smith', calmarRatio: 1.1, overallProfit: '$4500', avgDailyProfit: '$180', winPercentage: '70%', price: '$90', action: 'View' },
        { rank: 1, name: 'John Doe', calmarRatio: 1.2, overallProfit: '$5000', avgDailyProfit: '$200', winPercentage: '75%', price: '$100', action: 'View' },
        
    ];

    const barChartData = [
        { name: 'John Doe', profit: 5000 },
        { name: 'Jane Smith', profit: 4500 },
        // Add more data points here
    ];

    const pieChartData = [
        { name: 'John Doe', value: 75 },
        { name: 'Jane Smith', value: 25 },
        // Add more data points here
    ];

    const COLORS = ['#3f51b5', '#d32f2f', '#ff9800', '#4caf50', '#9c27b0', '#2196f3', '#ffeb3b', '#607d8b'];

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
        const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <Container maxWidth="lg" style={{ marginTop: 20 }}>
            <Typography variant="h3" align="center" gutterBottom>
                Leaderboards
            </Typography>
            <Paper elevation={3} style={{ padding: 20 }}>
                <Typography variant="h5" gutterBottom>
                    Basic Backtests
                </Typography>
                <Box display="flex" justifyContent="space-between">
                    <TableContainer component={Paper} style={{ flex: '0 0 60%' }}>
                        <Table>
                            <TableHead>
                                <HeaderRow>
                                    <TableCell>Rank</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Calmar Ratio</TableCell>
                                    <TableCell>Overall Profit</TableCell>
                                    <TableCell>Average Daily Profit</TableCell>
                                    <TableCell>Win Percentage</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Action</TableCell>
                                </HeaderRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user, index) => (
                                    <TableRow key={index} sx={index % 2 === 0 ? {} : { bgcolor: 'background.default' }}>
                                        <TableCell>{user.rank}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.calmarRatio}</TableCell>
                                        <TableCell>{user.overallProfit}</TableCell>
                                        <TableCell>{user.avgDailyProfit}</TableCell>
                                        <TableCell>{user.winPercentage}</TableCell>
                                        <TableCell>{user.price}</TableCell>
                                        <TableCell>
                                            <ActionButton variant="contained" color="primary">
                                                {user.action}
                                            </ActionButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box style={{ flex: '0 0 40%', marginLeft: 20 }}>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={barChartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="profit" fill="#3f51b5" />
                            </BarChart>
                        </ResponsiveContainer>
                        <Box mt={4} display="flex" justifyContent="center">
                            <PieChart width={400} height={300}>
                                <Pie
                                    data={pieChartData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={renderCustomizedLabel}
                                >
                                    {
                                        pieChartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))
                                    }
                                </Pie>
                                <PieTooltip />
                            </PieChart>
                        </Box>
                    </Box>
                </Box>
                <Box mt={4} textAlign="center">
                    <Button variant="outlined" color="primary">
                        Load More for
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Leaderboard;
