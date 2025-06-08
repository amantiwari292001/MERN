const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const port = 3001;

const user = [{
    name: "Aman",
    kidney: [{
        healthy: false
    }]
}];

app.get('/', (req, res) => {
    let kidneyArr = user[0].kidney;
    let numberOfKidney = kidneyArr.length;
    let healthyKidney = 0;
    let unhealthyKidney = 0;
    for(let i = 0;i<numberOfKidney;i++){
        if(kidneyArr[i].healthy){
            healthyKidney++;
        }unhealthyKidney = numberOfKidney -  healthyKidney;
    }
    res.json({
        numberOfKidney,
        healthyKidney,
        unhealthyKidney
    });
});
app.post('/', (req, res) => {
    let isHealthy = req.body.isHealthy;
    user[0].kidney.push({healthy: isHealthy})
    res.json(user[0].kidney);

});
app.put('/', (req, res) => {
    if(user[0].kidney[1].healthy){
        user[0].kidney[1].healthy = false;
    } else {
        user[0].kidney[1].healthy = true;
    }
    res.json(user[0].kidney);
});
app.delete('/', (req, res) => {
    let numberOfKidney = user[0].kidney.length;
    for(let i = 0;i<numberOfKidney;i++){
        if(user[0].kidney[i].healthy===false){
            user[0].kidney.splice(i,1);
            i--;
            numberOfKidney = user[0].kidney.length;
        }
    }
    res.json(user[0].kidney);
});

app.listen(port);