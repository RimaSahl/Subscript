exports.up = function(knex) {
    return knex.schema.createTable('Projects', function(table) {
      table.increments('Id').primary(); // Primary key
      table.string('Name').notNullable(); // Project name
      table.integer('Organization_id').unsigned().notNullable()
        .references('Id').inTable('Organizations').onDelete('CASCADE'); // Foreign key to Organizations
      table.timestamp('Created_at').defaultTo(knex.fn.now()); // Created timestamp
      table.timestamp('Updated_at').defaultTo(knex.fn.now()); // Updated timestamp
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Projects'); // Drop table if it exists
  };