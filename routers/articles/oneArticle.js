/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 18:41
*/
var oneArticle = function(db,id,callback) {
    var sql = 'SELECT * FROM `article` WHERE `articleId` = '+ id+'';
    db.query(sql, function(err, data) {
        if(err) {
            callback({
                'error' : true,
                'result' : '数据库出错'
            })
        }else {
            callback({
                'error' : false,
                'result' : JSON.parse(JSON.stringify(data))
            })
        }
    })
};

module.exports = oneArticle;