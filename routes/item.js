const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('/itemエンドポイントです');
});

router.get('/1', (req, res) => {
    res.status(200).send('/item/1エンドポイントです');
});

module.exports = router;
