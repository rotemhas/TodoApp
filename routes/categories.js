var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://rotemhas:5242677@ds155684.mlab.com:55684/mytaskslist_rotem', ['categories']);

// Get All Categories
router.get('/categories', function(req, res, next){
    db.categories.find(function(err, categories){
        if(err){
            res.send(err);
        }
        res.json(categories);
    });
});

//Save Category
router.post('/category', function(req, res, next){
    var category = req.body;
    if(!category.name){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.categories.save(category, function(err, category){
            if(err){
                res.send(err);
            }
            res.json(category);
        });
    }
});

// Delete Category
router.delete('/category/:id', function(req, res, next){
    db.categories.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, category){
        if(err){
            res.send(err);
        }
        res.json(category);
    });
});

module.exports = router;