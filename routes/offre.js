const express = require('express');
const router = express.Router();

router.get('/offre', (req, res, next) => {
  res.render('offre');
});

module.exports = router;
