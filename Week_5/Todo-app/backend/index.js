const express = require('express');
const { createTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

app.post('/todo', async(req, res) => {
    const createPayload = req.body;
    const assertReq = createTodo.safeParse(createPayload);
    if(!assertReq){
        res.status(411).json(
            {
                message: 'You sent the wrong inputs.'
            }
        );
    }

    await todo.create(req.body);
    res.json({
        message: 'Created successfully'
    });
});

app.get('/todos', async(req, res) => {
    const todos = await todo.find({});
    res.json({
        "todos": todos
    });
});

app.put('/completed', async(req, res) => {
    const createPayload = req.body;
    const assertReq = createTodo.safeParse(req.createPayload);
    if(!assertReq){
        res.status(411).json(
            {
                message: 'You sent the wrong inputs.'
            }
        );
    }

    const updateTask = await todo.updateOne({_id: req.body._id}, {completed: true});
    if(updateTask.matchedCount>0){
        res.json({
            message: 'Marked completed'
        });
    }
    res.json({
        message: "Something went wrong"
    });
});

app.listen(3001);