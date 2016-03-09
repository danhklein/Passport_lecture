var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login Page' });
});

router.post('/login', function(req, res, next) {
   var email = req.body.email;
   var password = req.body.password;
   res.send({
    email: email,
    password: password
   })
})

router.get('/logout', function(req, res, next) {
    res.redirect('/');
})

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Registration Page' });
});

router.post('/register', function(req, res, next) {
   var email = req.body.email;
   var password = req.body.password;
   res.send({
    email: email,
    password: password
   })
})


module.exports = router;
