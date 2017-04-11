/**
 * Created by prvr on 3/16/2017.
 */

(function(){

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var BearSchema = new Schema({
        name: String
    });

    module.exports = mongoose.model('Bear',BearSchema);

}())