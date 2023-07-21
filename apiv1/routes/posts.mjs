import express from 'express';
let router = express.Router()

router.get('/post/:userId/:postId', (req, res, next) => {
    console.log('Version1 post ', new Date());
    res.send('Version1 post ', new Date());
})

router.get('/posts/:userId', (req, res, next) => {
    console.log('Version1 specific user posts', new Date());
    res.send('Version1 specific user posts' + new Date());
})

router.post('/post', (req, res, next) => {
    console.log('Post created!', new Date());
    res.send('Version1 Post created!' + new Date());
})

router.put('/post/:userId/:postId', (req, res, next) => {
    console.log('User post ' + new Date());
    res.send('Version1 User post ' + new Date());
})

router.delete('/post/:userId/:postId', (req, res, next) => {
    console.log('Post deleted! ', new Date());
    res.send('Version1 Post deleted!', new Date());
})

export default router