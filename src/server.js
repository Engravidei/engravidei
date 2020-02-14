const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(process.env.PORT), () => {
    console.log(`Server running on port +${process.env.PORT} `);
};