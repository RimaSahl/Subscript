exports.up = function(knex) {
    return knex.schema.createTable('Tasks', function(table) {
      table.increments('Id').primary(); // Primary key
      table.string('Title').notNullable(); // Task title
      table.text('Description').notNullable(); // Task description
      table.enu('Status', ['TODO', 'IN_PROGRESS', 'DONE']).notNullable(); // Task status
      table.integer('Project_id').unsigned().notNullable()
        .references('Id').inTable('Projects').onDelete('CASCADE'); // Foreign key to Projects
      table.integer('Created_by').unsigned().notNullable()
        .references('Id').inTable('Users').onDelete('CASCADE'); // Foreign key to Users (creator)
      table.date('Due_date'); // Due date for the task
      table.integer('Assigned_to').unsigned().nullable()
        .references('Id').inTable('Users').onDelete('SET NULL'); // Foreign key to Users (assignee)
      table.timestamp('Created_at').defaultTo(knex.fn.now()); // Created timestamp
      table.timestamp('Updated_at').defaultTo(knex.fn.now()); // Updated timestamp
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Tasks'); // Drop table if it exists
  };