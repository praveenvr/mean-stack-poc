/**
 * Created by prvr on 12/14/2016.
 */

(function(){
    var mongoose = require('mongoose');

    module.exports = mongoose.model('Nerd', {
        name:{
            type:String,
            default:''
        }
    })
}())