const router = require('express').Router();
const path = require('path');

//Route(s)
router.get('/',(req,res)=>{
    res.sendFile(__dirname + ("/./views/login/login.html"));
}); 

router.post('/',(req,res)=>{
    let username = req.body.uname;
    let password = req.body.pass;
    res.send(`Username: ${username} Password : ${password}`);
});

module.exports = router;