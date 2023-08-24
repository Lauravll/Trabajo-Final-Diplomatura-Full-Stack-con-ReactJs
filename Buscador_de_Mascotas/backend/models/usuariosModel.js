var pool = require('./db'); //Llama datos BD
var md5 = require('md5'); 

//Asincronica porque no se en que momento va a entrar el usuario
async function getUserByUsernameAndPassword(username, password) {
  try {
    var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
    var rows = await pool.query(query, [username, md5(password)]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getUserByUsernameAndPassword }