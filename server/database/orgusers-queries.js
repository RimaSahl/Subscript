const knex = require("./connection.js");

async function create(Organization_id, User_id, role){
    const results = await knex('OrganizationUsers').insert({ Organization_id, User_id, role }).returning('*');
    return results[0];
}

// get organization details by userId
async function getByUserId(User_id){
    return await knex('OrganizationUsers').join('Organizations', 'OrganizationUsers.Id' , 'Organizations.Id')
        .where({User_id}
        .select('Organizations.*')
        )
}


module.exports = {
 create,
 getByUserId
}