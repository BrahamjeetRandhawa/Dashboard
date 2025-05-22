

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const xlsx = require('xlsx');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('static'));
app.set("view engine", "ejs");
app.set("views", "views");

// Database setup

app.use(cors());

app.get('/api/data', (req, res) => {
    const filePath = path.join(__dirname, "data", 'dB.xlsx');
    const workbook = xlsx.readFile(filePath);

    // Financials uitlezen
    const financialSheet = workbook.Sheets['Financials'];
    const financialData = xlsx.utils.sheet_to_json(financialSheet);

    // Demand View uitlezen
    const demandViewSheet = workbook.Sheets['Demand_view'];
    const demandViewData = xlsx.utils.sheet_to_json(demandViewSheet);

    // Fullfillment uitlezen
    const fulfilmentViewSheet = workbook.Sheets['Fulfilment_view'];
    const fulfilmentViewData = xlsx.utils.sheet_to_json(fulfilmentViewSheet);

    // Thought Leadership Demonstration uitlezen
    const thoughtLeadershipSheet = workbook.Sheets['Thought_leadership'];
    const thoughtLeadershipData = xlsx.utils.sheet_to_json(thoughtLeadershipSheet);

    res.json({
        financials: financialData,
        demandView: demandViewData,
        fulfilmentView: fulfilmentViewData,
        thoughtLeadership: thoughtLeadershipData
    });
});





// const data = [
//     { id: 1, label: 'Budget', percentage: 26, title: 'Revenue'},
//     { id: 2, label: 'Actuals', percentage: 28, title: 'Revenue'},
//     { id: 3, label: 'Achieved percentage', percentage: 108, title: 'Revenue'},
//     { id: 4, label: 'Budget', percentage: 28, title: 'Gross Margin $'},
//     { id: 5, label: 'Actuals', percentage: 28, title: 'Gross Margin $'},
//     { id: 6, label: 'Achieved percentage', percentage: 108, title: 'Gross Margin $'},
//     { id: 7, label: 'Budget', percentage: 26, title: 'Gross Margin %'},
//     { id: 8, label: 'Actuals', percentage: 28, title: 'Gross Margin %'},
//     { id: 9, label: 'Achieved percentage', percentage: 108, title: 'Gross Margin %'},
// ];

// app.get('/api/data', (req, res) => {
//     res.json(data);
// });















app.get('/', (req, res) => {
    res.render('index.ejs' );
});


// Keep the error handlers and server start at the end

// Middleware to handle 404 errors

app.use((req, res) => {
    console.log('404: Page Not Found' + req.url);
    // style this in the future
    res.status(404).render('404.ejs');
})

// Middleware to handle server errors
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).send('500: Internal Server Error');
});

// start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    console.log(`http://localhost:${process.env.PORT}`);
});