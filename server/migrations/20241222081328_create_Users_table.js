exports.up = function(knex) {
    return knex.schema.createTable('Users', function(table) {
      table.increments('Id').primary(); // Primary key
      table.string('Name').notNullable(); // User's name
      table.string('Email').notNullable().unique(); // User's email
      table.string('Password_hash').notNullable(); // Hashed password
      table.timestamp('Created_at').defaultTo(knex.fn.now()); // Created timestamp
      table.timestamp('Updated_at').defaultTo(knex.fn.now()).defaultTo(knex.fn.now()); // Updated timestamp
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Users'); // Drop table if it exists
  };