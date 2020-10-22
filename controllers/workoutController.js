const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((foundWorkout) => {
        res.json(foundWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          message: "Did not create new workout.",
        });
      });
  });

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

module.exports = router;
