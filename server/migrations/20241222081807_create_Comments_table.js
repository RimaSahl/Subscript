exports.up = function(knex) {
    return knex.schema.createTable('Comments', function(table) {
      table.increments('Id').primary(); // Primary key
      table.integer('Task_id').unsigned().notNullable()
        .references('Id').inTable('Tasks').onDelete('CASCADE'); // Foreign key to Tasks
      table.integer('User_id').unsigned().notNullable()
        .references('Id').inTable('Users').onDelete('CASCADE'); // Foreign key to Users
      table.text('Content').notNullable(); // Comment content
      table.timestamp('Created_at').defaultTo(knex.fn.now()); // Created timestamp
      table.timestamp('Updated_at').defaultTo(knex.fn.now()); // Updated timestamp
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Comments'); // Drop table if it exists
  };