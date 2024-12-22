const app = require('./server-config.js');
// const routes = require('./server-routes.js');
const userRoutes = require('./routes/user-routes.js');
const organizationRoutes = require('./routes/organization-routes.js');
const orgusersRoutes = require('./routes/orgusers-routes.js');

const port = process.env.PORT || 5000;

//user routes
app.post('/users', userRoutes.createUser);

//organization routes
app.post('/organizations', organizationRoutes.createOrganization);


//orgusers routes
app.post('/orgusers', orgusersRoutes.createOrguser);
app.get('/orgusers/:id', orgusersRoutes.createOrguser);


if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;