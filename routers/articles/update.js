/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 15:51
*/
const updateArticle = function(db,id,type,content,callback){
    var sql = "insert into article values (NULL,'" + type +"','" + content + "')";
    db.query(sql,function(err,data){
        if(err){
            callback({
                'error': true,
                'result': '数据库出错'
            })
        }else{
            callback({
                'error': false,
                'result': '成功'
            })
        }
    })
};
module.exports = updateArticle;