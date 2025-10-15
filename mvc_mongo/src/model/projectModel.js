const mongoose = require('mongoose');
const schema = mongoose.Schema;

let projectSchema = new schema({
    title: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 500},
    assignedTo: {type: mongoose.Schema.Types.ObjectId, ref:'User', required: true},

    });

module.exports = mongoose.model('Project', projectSchema);
