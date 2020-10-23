//requiring express, router, and models 
const express = require("express");
const router = express.Router();
const db = require("../models");

// returns the workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((foundWorkout) => {
        res.json(foundWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          message: "Did not find any workouts.",
        });
      });
  });

//adds a new workout 
  router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then((newWorkout) => {
        res.json(newWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          message: "Did not create new workout.",
        });
      });
  });

//finds an updates a workout by id
  router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true }
    )
      .then((newExercise) => {
        res.json(newExercise);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          message: "Did not update workout.",
        });
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .limit(5)
      .then((foundWorkout) => {
        res.json(foundWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          message: "Did not update workout.",
        });
      });
  });

//exporting the controller 
module.exports = router;
