var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  //con barra porque es un redireccionamiento
  res.redirect('admin/login');
});

module.exports = router;
