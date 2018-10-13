/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 15:54
*/
const  express = require('express');
const router = express.Router();
const db = require('../../libs/db');

const addArticle = require('./add');
const deleteArticle = require('./delete');
const updateArticle = require('./update');
const allArticle = require('./allArticle');
const oneArticle = require('./oneArticle');

//增加文章
router.use('/add',function(req,res,next){
    const type = req.body.type;
    const content = req.body.content;
    addArticle(db,type,content,function(data){
        res.send(data);
    })
});
//获取所有文章
router.use('/getall',function(req,res,next){
    allArticle(db,function(data){
        res.send(data);
    })
});
//删除所有文章
router.use('/delete',function(req,res,next){
    var id = req.body.id;
    deleteArticle(db,id,function(data){
        res.send(data);
    })
});
//修改文章
router.use('/update',function(req,res,next){
    var id = req.body.id;
    var type = req.body.type;
    var content = req.body.content;
    updateArticle(db,id,type,content,function(data){
        res.send(data);
    })
});
//修改文章
router.use('/getone',function(req,res,next){
    var id = req.body.id;
    oneArticle(db,id,function(data){
        res.send(data);
    })
});

module.exports = router;
