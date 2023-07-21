import express from 'express';
let router = express.Router()


router.get('/feed/:userId', (req, res, next) => {
    console.log("Version2 News Feed for today", new Date());
    res.send("Version2 News Feed for today", new Date());
})

export default router