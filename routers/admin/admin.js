/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 18:57
*/
const  express = require('express');
const router = express.Router();
const db = require('../../libs/db');
const common = require('../../libs/common');

const login = require('./login');
const register = require('./register');


//登陆验证
router.use('/login',function(req,res,next){
    let name = req.body.name;
    let password = req.body.password;
    // console.log(name+password);
    login(db, name, password, common, function(data){
        res.send(data);
        // console.log(data);
    })
});
//增加登陆账号
router.use('/register',function(req,res,next){
    let name = req.body.userName;
    let password = req.body.userPassword;
    register(db,name,password,common,function(data){
        res.send(data);
    })
});

module.exports = router;
