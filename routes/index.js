var express = require('express');
var router = express.Router();
const quizCtrl=require("../controllers/quiz_controller");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proyecto Quiz' });
});



router.get('/credits', function(req, res, next) {
  res.render('credits');
});

router.get('/quizzes', quizCtrl.index);

module.exports = router;
