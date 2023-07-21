import express from 'express';
let router = express.Router()

router.get("/comment/:postId/:commentId", (res, req, next) => {
    console.log("This is a specific comment of specific post");
    res.send("Version1 This is a specific comment of specific post" + new Date());
})

router.get("/comment/:postId/", (res, req, next) => {
    console.log("This is a specific comment of specific post");
    res.send("Version1 This is a specific post comments" + new Date());
})

router.put('/comment/:postId/:commentId', (req, res, next) => {
    console.log('Commented on post!', new Date());
    res.send('Version1 Commented! ' + new Date());
})
router.delete('/comment/:postId/:commentId', (req, res, next) => {
    console.log('Comment deleted', new Date());
    res.send('Version1 Comment deleted form the post!' + new Date());
})

export default router