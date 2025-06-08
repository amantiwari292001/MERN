const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://aman:ai7FdKAEIZS0ArI0@myfirstdb.qdi3bbi.mongodb.net/Tester");
const testerData = mongoose.model("Tester", {username: String, password: String});

async function saveData(username, password){
    let existing = await testerData.findOne({username: username});
    if(existing){
        return false;
    }else{
        let pushData =  new testerData({username: username, password: password});
        pushData.save();
        return true;
    }
}

async function getData(username){
    let existing = await testerData.findOne({username: username});
    if(existing){
        return existing;
    }else{
        return null;
    }
}

module.exports = {saveData, getData, testerData};