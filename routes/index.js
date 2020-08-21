var express = require('express');
var router = express.Router();

var sendMail = require('../send')

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', async function(req, res, next) {
  res.send('GET is not supported in this API. POST maybe ?')
});


router.post('/', async function(req, res, next) {
  console.log(req.body.author)
  var sent = await sendMail(req.body)
  res.send('Mail Sent!')
}, function(error) {
  console.log(error)
});

module.exports = router;
