var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var knex = require('../../../db/knex');

function Users() {
 return knex('users');
};

passport.use(new LocalStrategy({
   usernameField: 'email'
 }, function(email, password, done) {
   // does email exist?
   Users().where(email: req.body.email)
   .then(function (data) {
        //email does not exist. return error.
        if (!data.length) {
             return done(null, 'Incorrect email.');
       }
       var user = data[0];
       //email found but do the passwords match?
         if (!password === user.password) {
        //passwords match! return user
             return done(null, user);
         } else {
             //passwords don't match! return error
           return done(null, 'Incorrect password.');
           };
       })
       .catch (function(err) {
        //issue with sql/nex query
        return done(null, 'Incorrect email and/or password.');
        });
    }
));

// sets the user to 'req.user' and establishes a session via a cookie
passport.serializeUser(function(user, done) {
 done(null, user.id);
});

// used on subsequent requests to update 'req.user' and update session
passport.deserializeUser(function(id, done) {
 // find user and return
});

module.exports = passport;