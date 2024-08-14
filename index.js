const express = require('express');
const path = require('path');
const app = express();

// Middleware to serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Route to serve the index.html file
app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

