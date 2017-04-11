/**
 * Created by prvr on 3/16/2017.
 */

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

var db = require('./config/db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

var port = process.env.PORT || 8080;
var router = express.Router();

router.use(function(req,res,next){
    console.log('Something is Happening in Middleware');
    next();
});

//router.get('/',function(req,res){
//    res.json({message:'hooray! welcome to our api!'});
//});
var Bear = require('./models/bear');
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

var Post = require('./models/post');
router.route('/posts')
    .post(function(req,res){
        var post = new Post();
        post.postTitle = req.body.title;
        post.postDesc = req.body.desc;
        post.postCategory = req.body.category;
        post.postDate = req.body.Date;
        post.authorId = req.body.author;

        post.save(function(err){
            if(err){
                res.send(err);
            }
            else{
                res.json({message:'Post Created'});
            }
        })

    })
    .get(function(req,res){
        Post.find(function (err,posts) {
            if(err)
                res.send(err);
            res.json(posts);
        })
    });

router.route('/posts/:post_id')
    .get(function (req,res) {
        Post.findById(req.params.post_id, function (err, post) {
            if(err)
                res.send(err);
            res.json(post);
        });
    })
    .put(function(req,res){
        Post.findById(req.params.post_id, function(err, post){
            if(err)
                res.send(err);

            post.postTitle = req.body.postTitle;
            post.postDesc = req.body.postDesc;
            post.postDate = req.body.postDate;

            post.save(function (err) {
                if(err)
                    res.send(err);
            });
            res.json({message:'Post Updated Successfully'});
        })
    })
    .delete(function (req,res) {
        Post.remove({
            _id:req.params.post_id
        }, function (err) {
            if(err)
                res.send(err);
            res.json({message:'Post Removed Successfully'})
        });
    });

var User = require('./models/user');

router.route('/users')
    .post(function(req,res){
        var user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        user.userRegDate = req.body.Date;

        user.save(function(err){
            if(err){
                res.send(err);
            }
            else{
                res.json({message:'User Created'});
            }
        })

    })
    .get(function(req,res){
        User.find(function (err,users) {
            if(err)
                res.send(err);
            res.json(users);
        })
    });
router.route('/user/:email/:password')
    .get(function (req,res) {
        User.findOne({email: req.params.email, password: req.params.password}, function(err, user){
            if(err){
                res.send(err);
            }else{
                res.json(user);
            }
        });
    });
router.route('/user/:user_id')
    .get(function (req,res) {
        User.findOne(req.params.user_id, function(err, user){
            if(err)
                res.send(err);
            res.json(user);
        });
    })
    .put(function(req,res){
        Post.findById(req.params.user_id, function(err, user){
            if(err)
                res.send(err);

            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;

            user.save(function (err) {
                if(err)
                    res.send(err);
            });
            res.json({message:'User Updated Successfully'});
        })
    })
    .delete(function (req,res) {
        User.remove({
            _id:req.params.user_id
        }, function (err) {
            if(err)
                res.send(err);
            res.json({message:'User Removed Successfully'})
        });
    })

var Category = require('./models/category');

router.route('/category')
    .post(function(req,res){
        var category = new Category();
        category.categoryTitle = req.body.title;
        category.categoryDesc = req.body.desc;
        category.authorId = req.body.author;
        category.categoryDate = req.body.Date;

        category.save(function(err){
            if(err){
                res.send(err);
            }
            else{
                res.json({message:'Category Created'});
            }
        })

    })
    .get(function(req,res){
        Category.find(function (err,category) {
            if(err)
                res.send(err);
            res.json(category);
        })
    });


app.use('/api',router);

app.listen(port);
console.log('Magic happens on port ' + port);

exports = module.exports = app;