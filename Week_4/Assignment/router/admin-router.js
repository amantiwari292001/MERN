const express = require('express');
const adminMiddleware = require('../middleware/admin-middleware');
const { Admin, Course } = require('../db');
const { courseSchema, inputSchema } = require('../zod/zod');
const adminrouter = express.Router();

adminrouter.post('/signup', async(req, res)=>{
    try{
        //Creating a record.
        const correctBody = inputSchema.safeParse(req.body).success;
        if(correctBody){
            const saved = await Admin.create(req.body);
            if(saved){
                res.json({'message': 'Admin Created'});
            }
        }
    }catch(e){
        res.send('Something went wrong.');
    }
});

adminrouter.post('/courses', adminMiddleware, async(req, res) => {
    try{
        const correctBody = courseSchema.safeParse(req.body).success;
        if(correctBody){
            const newCourse = await Course.create(req.body);
            if(newCourse){
                res.json({
                    'message': 'Course created successfully',
                    'courseId': newCourse._id
                });
            }
        }
    }catch(e){
        res.send('Something went wrong.');
    }
});

adminrouter.get('/courses', adminMiddleware, async(req, res) => {
    const saved = await Course.find({});
    res.json(saved);
})

module.exports = adminrouter;