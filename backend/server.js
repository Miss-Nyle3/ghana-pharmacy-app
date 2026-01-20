// 1. Import the Express tool to create our server
const express = require('express');
const cors = require('cors');

// 2. Initialize the app
const app = express();
app.use(cors()); // This allows the frontend to talk to this server
app.use(express.json()); // This allows the server to read data you send it

// 3. Create a "Home" route to test if it's working
app.get('/', (req, res) => {
    res.send("The Ghana Pharmacy Backend is Alive! 🇬🇭🚀");
});

// 4. Start the server on Port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});