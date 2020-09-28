const express = require('express');
const router = express.Router();

router.get('/projets_menes', (req, res, next) => {
  res.render('projets_menes');
});

module.exports = router;
