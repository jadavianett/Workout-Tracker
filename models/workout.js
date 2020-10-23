// requiring mongoose and schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating a workout  model
const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now(),
    },

    exercises: [
      {
        type: {
          type: String,
        },
        name: {
          type: String,
        },
        distance: {
          type: Number,
        },
        duration: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        reps: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
// virtual that updates the total workout duration
WorkoutSchema.virtual("totalDuration").get(function () {
return this.exercises.reduce((total, exercise)=> {
return total + exercise.duration
},0)
});

//exports the workout model
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
