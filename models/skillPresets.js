const mongoose = require("mongoose");
module.exports = function(db) {


    // Defines an attendee within an event
    let Schema = mongoose.Schema;

    let skillSchema = new Schema({
        pid: String,
        name: String,
        params: [
            {tid: Number,
             id: Number,
            }],

    });


    return db.model('skillPresets', skillSchema);

};