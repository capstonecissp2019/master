const mongoose = require("mongoose");


module.exports = function(db) {
    let loginSchema = new mongoose.Schema({
        password:String,
        Status: Boolean,
        timeTillNextLogin: Date,
        lastSignedOn: Date,
        screenName: String,
        email: String,
        createdOn: Date,
        birthday: Date,
      
      notification : [
          {
              created_on : Date,
              message : String,
              link : String,
              view_status : Boolean,
          } ],
          role : [
              {
                  role_id : String,
                  role_name : String,
                  role_desc : String,
              }
          ],
    });

    return db.model('login', loginSchema);


};
