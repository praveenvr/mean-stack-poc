/**
 * Created by prvr on 3/17/2017.
 */
(function(){

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var MenuSchema = new Schema({
        menuLabel: String,
        menuUrl:String,
        footerMenu:Boolean,
        createdDate:Date
    });

    module.exports = mongoose.model('Menu',MenuSchema);

}());