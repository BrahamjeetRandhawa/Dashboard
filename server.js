

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('static'));
app.set("view engine", "ejs");
app.set("views", "views");

// Database setup





app.use(cors());

const data = [
    { id: 1, label: 'Budget', percentage: 26, title: 'Revenue'},
    { id: 2, label: 'Actuals', percentage: 28, title: 'Revenue'},
    { id: 3, label: 'Achieved percentage', percentage: 108, title: 'Revenue'},
    { id: 4, label: 'Budget', percentage: 28, title: 'Gross Margin $'},
    { id: 5, label: 'Actuals', percentage: 28, title: 'Gross Margin $'},
    { id: 6, label: 'Achieved percentage', percentage: 108, title: 'Gross Margin $'},
    { id: 7, label: 'Budget', percentage: 26, title: 'Gross Margin %'},
    { id: 8, label: 'Actuals', percentage: 28, title: 'Gross Margin %'},
    { id: 9, label: 'Achieved percentage', percentage: 108, title: 'Gross Margin %'},
];

app.get('/api/data', (req, res) => {
    res.json(data);
});















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