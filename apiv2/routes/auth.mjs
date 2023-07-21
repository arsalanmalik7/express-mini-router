import express from 'express';
let router = express.Router()

router.post('/login', (res, req, next)=>{
    console.log("Version2 Log in to this page");
    res.send("This the version2 of Login page" + new Date())
})

router.post('/signup', (res, req, next)=>{
    console.log("Version2 Sign up to this page");
    res.send("This the version2 of Signup page" + new Date())
})

export default router