const experss = require("express");
const bodyparser = require("body-parser");
const app = experss();
app.use(bodyparser.json());
const port = 3000;

let todoList = [];
let ids = [];
app.get('/todos', (req, res) => {
    if(todoList.length>0){
        res.status(404).send(todoList);
    } else {
        res.status(200).send('No item saved.')
    }
});

app.get('/todos/:id', (req, res) => {
    let indexOfData = ids.indexOf(req.params.id);
    if(indexOfData>-1){
        res.status(200).send(todoList[indexOfData]);
    } else {
        res.status(500).send('Not Present');
    }
});

app.post('/todos/:id', (req, res) => {
    if(isNaN(req.params.id)){
        res.status(500).send("Id should be a number.")
    } else {
        if(ids.indexOf(req.params.id)==-1){
            ids.push(req.params.id);
            todoList.push({
                id: req.params.id,
                task: req.body
            });
            console.log('List Updated');
            res.status(200).send(todoList);
        } else{
            res.status(500).send('Id already present.')
        }
    }
});

app.put('/todos/:id', (req, res) => {
    let indexOfData = ids.indexOf(req.params.id);
    if(indexOfData>-1){
        todoList[indexOfData].task = req.body;
        res.status(200).send(todoList[indexOfData]);
    } else {
        res.status(500).send('Not Present');
    } 
});

app.delete('/todos/:id', (req, res) => {
    let indexOfData = ids.indexOf(req.params.id);
    if(indexOfData>-1){
        ids.splice(indexOfData,1);
        todoList.splice(indexOfData,1);
        res.status(200).send(todoList);
    } else {
        res.status(500).send('Not Present');
    }
});

app.listen(port);