

require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('static'));
app.set("view engine", "ejs");
app.set("views", "views");

// Database setup




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