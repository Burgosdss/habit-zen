const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const habitSchema = new Schema({
    goal: {
        type: String,
        min: 0,
        max: 1,
    },
    habit: {
        type: String,
        done: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    // how can we handle edge cases where a user enters an end date before the start date, etc?
    sDate: Date,
    eDate: Date

}, {
    timestamps: true
});

module.exports = mongoose.model("Habit", habitSchema);