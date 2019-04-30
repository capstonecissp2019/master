const mongoose = require("mongoose");
module.exports = function(db) {


    // Defines an attendee within an event
    let Schema = mongoose.Schema;

    let skillSchema = new Schema({
        pid: String,
        name: String,
        abilities: [
            {id: Number,
             name: String,
            value: Number,
            parents: [
                {
                    tid: Number,
                    value: Number,
                }
            ],
        }],

    });


    return db.model('skillLookup', skillSchema);

};