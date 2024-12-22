const users = require('../database/user-queries.js');

async function createUser(req,res){

    const {name, email, password} = req.body;
    if(!name, !email, !password){
        throw Error("fields cant be empty");
    }
    const user = await users.create(name, email, password);
    return  res.send(user); 
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
    createUser: { method: createUser, errorMessage: "not created ..." }
}

for (let route in toExport) {
    toExport[route] = addErrorReporting(toExport[route].method, toExport[route].errorMessage);
}

module.exports = toExport;