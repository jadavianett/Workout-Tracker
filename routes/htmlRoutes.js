const path = require("path");
const {dirname} = require("path");
module.exports = function(app){

    app.get("/stats", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });
    
    app.get("/exercise", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    });

    app.post("/api/workouts", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    })
    
    
    };