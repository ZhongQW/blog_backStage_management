/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/13
    Time: 18:15
*/
let BlogSQL = {
    modifyOwner: "update owner set nickname=?, name=?, title=?, " +
    "age=?, sex=?, email=?, job=?, address=?, motto=? " +
    "where  id= 123",
};

module.exports = BlogSQL;