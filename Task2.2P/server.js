const express = require('express'); // Import Express framework
const app = express(); // Initialize Express
const port = 3000; // Port to run the server

// Middleware to serve static files from the 'public' folder
app.use(express.static('public'));

// Simple GET endpoint for testing
app.get('/here', (req, res) => {
    res.send('Hello World!');
});

// Web service to add two numbers using GET method
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const sum = num1 + num2;
    res.send({ result: sum });
});

// Middleware to parse JSON for POST requests
app.use(express.json());

// Web service to add two numbers using POST method
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    const sum = num1 + num2;
    res.send({ result: sum });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
