/**
 * Created by prvr on 3/17/2017.
 */
(function(){

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var UserSchema = new Schema({
        name: String,
        email:{type:String},
        password:String,
        userRegDate:{ type: Date, default: Date.now }
    });

    module.exports = mongoose.model('User',UserSchema);

}());