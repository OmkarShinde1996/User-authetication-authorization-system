const express = require('express')
const loggedIn = require('../controllers/loggedin')

const logout = require('../controllers/logout')
const router = express.Router()

router.get('/', loggedIn, (req, resp) => {
    if(req.user){
        resp.render('index', {status:'loggedIn', user:req.user})
    }else{
        resp.render('index', {status:'no', user:'nothing'})
    }
})
router.get('/register',(req, resp) => {
    resp.sendFile('register.html',{root:'./public'})
})
router.get('/login',(req, resp) => {
    resp.sendFile('login.html',{root:'./public'})
})

router.get('/logout', logout)
module.exports = router