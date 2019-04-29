const mongoose = require("mongoose");
module.exports = function(db) {


    // Defines an attendee within an event
    let Schema = mongoose.Schema;

    let skillSchema = new Schema({
        aid: String,
        skilltree: [],

    });


    return db.model('skill', skillSchema);


};
