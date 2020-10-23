
const path = require("path");
const {dirname} = require("path");
module.exports = function(app){

    // returns the stats page
    app.get("/stats", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });
    // returns the exercise page 
    app.get("/exercise", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    });
    
    };