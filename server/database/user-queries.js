const knex = require("./connection.js");
const bcrypt = require('bcrypt');

async function create(Name, Email, Password){
    const Password_hash = bcrypt.hashSync(Password, 10);
    const results = await knex('Users').insert({ Name, Email, Password_hash }).returning('*');
    return results[0];
}


module.exports = {
 create
}