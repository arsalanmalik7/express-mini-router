import express from 'express';
let router = express.Router()

router.post('/login', (req, res, next) => {
    console.log("Log in to this page");
    res.send("This the version1 of Login page " + new Date());
})

router.post('/signup', (req, res, next) => {
    console.log("Sign up to this page ");
    res.send("This the version1 of Signup page " + new Date());
})

export default router