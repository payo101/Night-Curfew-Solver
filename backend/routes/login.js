const router = require('express').Router();
const path = require('path'); //to remove forbidden error
const {check, validationResult} = require('express-validator'); //validating email and password
const session = require('express-session'); //authentication
const passport = require('passport'); //authentication
const connectEnsureLogin = require('connect-ensure-login'); //authentication

const User = require('./../config/user'); 
const bodyParser = require('body-parser');
const { resolveNaptr } = require('dns');

//Route(s)
router.get('/',(req,res)=>{
    res.sendFile(__dirname + ("/./views/login/login.html"));
});

router.use(session({
    secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60*60*1000} // 1 hour
}));

router.use(bodyParser.urlencoded({extended: false}));
router.use(passport.initialize());
router.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//POST LOGIN
router.post('/',passport.authenticate('local', { failureRedirect : '/login'}), (req,res)=>{
    res.redirect('/dashboard');
})

router.get('/dashboard',connectEnsureLogin.ensureLoggedIn(),(req,res) => {
    res.send(`You're logged in.`);
})

module.exports = router;