const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aman:.qdi3bbi.mongodb.net/todos');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed:Boolean
});

const todo = mongoose.model('Todos', todoSchema);

module.exports = {todo}
