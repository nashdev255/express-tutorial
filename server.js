const express = require('express');
const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    console.log('Hello, World');
});

app.listen(PORT, () => {
    console.log('server has started successfully');
});
