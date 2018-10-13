/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 15:51
*/
const deleteArticle = function(db,id,callback){
    var sql = "UPDATE `play` SET play_status = 2 WHERE `play_id` = ?";
    db.query(sql,function(err,data){
        if(err){
            callback({
                'error': true,
                'result': '数据库出错'
            })
        }else{
            callback({
                'error': false,
                'result': '删除成功'
            })
        }
    })
};
module.exports = deleteArticle;