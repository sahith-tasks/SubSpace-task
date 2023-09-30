const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const port = process.env.PORT || 3000;
app.use(cors());

const apiRouter = require('./routes/apiRoute');

app.get('/', (req, res) => {
    res.send('API is up and running !');
});

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});