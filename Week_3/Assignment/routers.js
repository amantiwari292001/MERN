const express = require("express");
const { getData, saveData } = require("./dbManagement");
const middleware = require("./middleware");
const router = express.Router();

router.post('/login', middleware, async(req, res) => {
    res.send("Login successfull🥳");
});

router.post('/signup', async(req, res) => {
    try{
        let existing = await getData(req.body.username);
        if(existing.username==req.body.username){
            res.send("Already exists");
        }else{
            let dataSaved = await saveData(req.body.username, req.body.password);
            res.send("DATA SAVED: " + dataSaved);
        }
    }catch(e){
        res.send("Something went wrong");
    }
});

module.exports = router;