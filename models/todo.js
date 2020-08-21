const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    item: String,
    done: false,
}, {
    timestamps: true
});

module.exports = mongoose.model('Todo', todoSchema);