const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://aman:ai7FdKAEIZS0ArI0@myfirstdb.qdi3bbi.mongodb.net/Week4');

//Schema
const UserSchema = mongoose.Schema(
    {
        username: String,
        password: String,
        purchasedCourses: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course'
            }
        ]
        // purchasedCourses: [ Also correct
        //     String
        // ]
    }
);

const AdminSchema = mongoose.Schema(
    {
        username: String,
        password: String,
    }
);

const CourseSchema = mongoose.Schema(
    {
        title: String,
        description: String,
        image: String,
        price: Number
    }
)

//Model
const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = { User, Admin, Course }