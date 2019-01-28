const passport = require('passport');
const User = require('../model/model.js');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        console.log('username:', username );
        (
            async() =>{
                // console.log(User.findOne({ username: 'hoangcanhsek6' }).lean());
            }
        )();
        User.findOne({ username: username }, function(err, user) {
            console.log('user: ', user);
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = passport;
