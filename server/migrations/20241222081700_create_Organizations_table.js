
exports.up = function(knex) {
    return knex.schema.createTable('Organizations', function(table) {
      table.increments('Id').primary(); // Primary key
      table.string('Name').notNullable(); // Organization's name
      table.timestamp('Created_at').defaultTo(knex.fn.now()); // Created timestamp
      table.timestamp('Updated_at').defaultTo(knex.fn.now()); // Updated timestamp
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Organizations'); // Drop table if it exists
  };