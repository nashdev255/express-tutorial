const express = require('express');
const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    console.log('Hello, Express');
    // res.send('<h1>Hello, World</h1>');
    // res.sendStatus(404);
    // res.status(404).send('お探しのページは見つかりませんでした');
    res.status(200).json({ msg: 'エラーです' });
});

app.listen(PORT, () => {
    console.log('server has started successfully');
});
