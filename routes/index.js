var express = require('express');
var router = express.Router();
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'POS RestAPi', message:'Welcome ' });
});


module.exports = router;
