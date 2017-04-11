/**
 * Created by prvr on 3/17/2017.
 */
(function(){

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var CommentsSchema = new Schema({
        comment: String,
        _id:{type:String, ref:'Post'},
        commentDate:Date,
        _authorId:String
    });

    module.exports = mongoose.model('Comments',CommentsSchema);

}());