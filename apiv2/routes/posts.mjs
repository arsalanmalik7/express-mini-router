import express from 'express';
let router = express.Router()

router.get('/post/:userId/:postId', (req, res, next) => {
    console.log('Version2 post ', new Date());
    res.send('Version2 post ' + new Date());
})

router.get('/posts/:userId', (req, res, next) => {
    console.log('Version2 specific user posts', new Date());
    res.send('Version2 specific user posts ' + new Date());
})

router.post('/post', (req, res, next) => {
    console.log('Post created!', new Date());
    res.send('Version2 Post created! ' + new Date());
})

router.put('/post/:userId/:postId', (req, res, next) => {
    console.log('User post ' + new Date());
    res.send('Version2 User post ' + new Date());
})

router.delete('/post/:userId/:postId', (req, res, next) => {
    console.log('Post deleted! ', new Date());
    res.send('Version2 Post deleted! ' + new Date());
})

export default router