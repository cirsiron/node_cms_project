const pool = require("../config/connect");
const userModel = require("../model/user");

const callback = (res, result)=>{
    if(typeof result === 'undefined') {
        res.json(
            {
                code: -1,
                msg: '操作失败'
            }
        )
    }else {
        res.json(result)
    }
}

const add = (req, res, next)=>{
    // 链接
    pool.getConnection((err, connection)=>{
        const param = req.query || req.param;
        let isExist = false;
        connection.query(userModel.queryByName, [param.name], (err, result)=>{
        
            if(result && result.length) {
                isExist = true;
            }

            if(isExist) {
                callback(res, {
                    code: 304,
                    msg: '用户名已存在'
                });
            }else {
                connection.query(userModel.insert, [param.name, param.age], (err, result)=>{
                    if(result) {
                        result = {
                            code: 200,
                            msg: '添加用户成功'
                        };
                    }
        
                    callback(res, result);
                    //  注意释放链接
                    connection.release();
                });
            }
        });
        
        
    });
}

module.exports = {
    add
}