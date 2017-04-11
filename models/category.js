/**
 * Created by prvr on 3/17/2017.
 */
(function(){

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var CategorySchema = new Schema({
        categoryTitle: String,
        categoryDesc:String,
        categoryDate:{type:Date, default:Date.now},
        authorId:{type:String, ref:'User'}
    });

    module.exports = mongoose.model('Category',CategorySchema);

}());