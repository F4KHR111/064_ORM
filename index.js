const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./models');
app.use(express.json());
app.use(express.urlencoded({ 
    extended: true 
}));

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});