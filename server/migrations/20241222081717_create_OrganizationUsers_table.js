exports.up = function(knex) {
    return knex.schema.createTable('OrganizationUsers', function(table) {
      table.increments('Id').primary(); // Primary key
      table.integer('User_id').unsigned().notNullable()
        .references('Id').inTable('Users').onDelete('CASCADE'); // Foreign key to Users
      table.integer('Organization_id').unsigned().notNullable()
        .references('Id').inTable('Organizations').onDelete('CASCADE'); // Foreign key to Organizations
  
      // Optionally, you can add a composite primary key
      // table.primary(['User_id', 'Organization_id']); // Uncomment if needed
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('OrganizationUsers'); // Drop table if it exists
  };