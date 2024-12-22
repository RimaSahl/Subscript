const organizations = require('../database/organization-queries.js');

async function createOrganization(req,res){

    const {name} = req.body;
    if(!name){
        throw Error("fields cant be empty");
    }
    const organization = await organizations.create(name);
    return  res.send(organization); 
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
    createOrganization: { method: createOrganization, errorMessage: "not created ..." }
}

for (let route in toExport) {
    toExport[route] = addErrorReporting(toExport[route].method, toExport[route].errorMessage);
}

module.exports = toExport;