/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 15:51
*/
var allArticle = function(db, callback) {
    var sql = 'SELECT * FROM `article`';
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

module.exports = allArticle;
