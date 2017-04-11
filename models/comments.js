/**
 * Created by prvr on 3/17/2017.
 */
(function(){

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var PostSchema = new Schema({
        postTitle: String,
        postDesc:String,
        postDate:Date
    });

    module.exports = mongoose.model('Post',PostSchema);

}());