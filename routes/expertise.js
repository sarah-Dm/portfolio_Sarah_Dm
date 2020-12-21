const express = require('express');
const router = express.Router();

router.get('/expertise', (req, res, next) => {
  res.render('expertise');
});

module.exports = router;
