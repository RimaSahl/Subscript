exports.up = function(knex) {
    return knex.schema.table('OrganizationUsers', function(table) {
      table.enu('role', ['ADMIN', 'MEMBER', 'GUEST']).defaultTo('MEMBER'); // Adding role column
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('OrganizationUsers', function(table) {
      table.dropColumn('role'); // Removing the role column
    });
  };