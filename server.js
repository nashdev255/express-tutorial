const express = require('express');
const app = express();
const userRouter = require('./routes/user');
const itemRouter = require('./routes/item');

const PORT = 3000;

// use html files in /public/
// app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('Hello, Express');
    // res.send('<h1>Hello, World</h1>');
    // res.sendStatus(404);
    // res.status(404).send('お探しのページは見つかりませんでした');
    // res.status(200).json({ msg: 'エラーです' });
    res.render('index', { text: 'nodeとexpress' });
});

// Routing
app.use('/user', userRouter);
app.use('/item', itemRouter);

app.listen(PORT, () => {
    console.log('server has started successfully');
});
