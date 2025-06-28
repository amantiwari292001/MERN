const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aman:ai7FdKAEIZS0ArI0@myfirstdb.qdi3bbi.mongodb.net/todos');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed:Boolean
});

const todo = mongoose.model('Todos', todoSchema);

module.exports = {todo}