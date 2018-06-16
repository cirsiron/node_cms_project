
const user = {
    insert: 'INSERT INTO user(name, age) VALUES(?,?)',
    updata: 'UPDATE user set name=?, age=? where id=?',
    delete: 'DELETE FROM user where id=?',
    queryById: 'SELECT * FROM user where id=?',
    queryAll: 'SELECT * FROM user',
    queryByName: 'SELECT name FROM user where name=?'
}

module.exports = user;