var express = require('express');
var router = express.Router();
const app = express()
const user = require('./../controllers/user');
const brand = require('./../controllers/brand');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'POS RestAPi', message:'Welcome ' });
});
// router.get('/user',user)
router.get('/brand',brand.getAll);
module.exports = router;
