const express = require('express');
const dbConnect = require('./config/database');
const blogRoutes = require('./routes/blogRoutes');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());

app.use('/posts', blogRoutes);

app.listen(PORT, () => {
    console.log(`Server is live at the port no. ${PORT}. Check out http://localhost:${PORT}`);
})

dbConnect();

app.get('/', (req, res) => {
    res.send(`Server is running ...`);
})