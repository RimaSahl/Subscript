const knex = require("./connection.js");

async function create(Name){
    const results = await knex('Organizations').insert({ Name }).returning('*');
    return results[0];
}


module.exports = {
 create
}