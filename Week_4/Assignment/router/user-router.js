const express = require('express');
const { User, Course } = require('../db');
const userMiddleware = require('../middleware/user-middleware');
const userRouter = express.Router();

userRouter.post('/signup', async (req, res) => {
    try{
        const saved = await User.create(req.body);
        if(saved){
            res.json({'message': 'User Created'});
        }
    }catch(e){
        res.send('Something went wrong.');
    }
});

userRouter.post('/courses/:courseId', userMiddleware, async(req, res) => {
    try{
        const updateCourse = await User.updateOne(
            {username: req.headers.username},
            {
                '$push':{
                    purchasedCourses: req.params.courseId
                }
            }
        );
        res.json({
            message: 'Successfully course added'
        });
    }catch(e){
        res.send('Something went wrong.')
    }
});

userRouter.get('/purchase', userMiddleware, async(req, res) => {
    const purchasedCourses = (await User.findOne(
        {username: req.headers.username}
    )).purchasedCourses;

    const courseDetails = await Course.find({_id: purchasedCourses});
    res.send(courseDetails);
});

module.exports = userRouter;