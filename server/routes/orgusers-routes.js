const orgusers = require('../database/orgusers-queries.js');

async function createOrguser(req,res){

    const {Organization_id, User_id, role} = req.body;
    if(!Organization_id || !User_id || !role){
        throw Error("fields cant be empty");
    }
    const orguser = await orgusers.create(Organization_id, User_id, role);
    return  res.send(orguser); 
}

async function getOrgByUserId(req,res){
    const { User_id} = req.params;
    const orguser = orgusers.getByUserId(User_id);
    return res.send(orguser)

}


function addErrorReporting(func, message) {
    return async function(req, res) {
        try {
            return await func(req, res);
        } catch(err) {
            console.log(`${message} caused by: ${err}`);

            // Not always 500, but for simplicity's sake.
            res.status(500).send(`Opps! ${message}.`);
        } 
    }
}

const toExport = {
    createOrguser: { method: createOrguser, errorMessage: "not created ..." },
    getOrgByUserId: { method: getOrgByUserId, errorMessage: "not created ..." }
}

for (let route in toExport) {
    toExport[route] = addErrorReporting(toExport[route].method, toExport[route].errorMessage);
}

module.exports = toExport;