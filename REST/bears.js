/**
 * Created by prvr on 3/17/2017.
 */

(function () {
    var express    = require('express');
    var app        = express();
    var router = express.Router();
    var Bear = require('../models/bear');
    router.route('/bears')
        .post(function(req,res){
            var bear = new Bear();
            bear.name = req.body.name;

            bear.save(function(err){
                if(err){
                    res.send(err);
                }
                else{
                    res.json({message:'Bear Created'});
                }
            })
        })
        .get(function (req,res){
            Bear.find(function (err,bears) {
                if(err)
                    res.send(err);
                res.json(bears);
            })
        });

    router.route('/bears/:bear_id')
        .get(function(req,res){
            Bear.findById(req.params.bear_id, function (err,bear) {
                if(err)
                    res.send(err);
                res.json(bear);
            })
        })
        .put(function (req,res) {
            Bear.findById(req.params.bear_id, function (err,bear) {
                if(err)
                    res.send(err);
                bear.name = req.body.name;

                bear.save(function (err) {
                    if(err)
                        res.send(err)
                })
                res.json({message:'Bear Updated'});

            })
        })
        .delete(function (req,res) {
            Bear.remove({
                _id:req.params.bear_id
            }, function (err) {
                if(err)
                    res.send(err);
                res.json({message:'Bear Removed Successfully'})
            });

        });
}())
