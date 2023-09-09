const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('/userエンドポイントです');
});

router.get('/info', (req, res) => {
    res.status(200).send('/user/infoエンドポイントです');
});

router.get('/:id', (req, res) => {
    res.send(`${req.params.id}のユーザー情報を取得しました`);
});

module.exports = router;
