exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (tbl) => {
        // we must use the callback syntax for .createTable()
        tbl.increments(); // pass the name if you wanted to be called anything other than id
        tbl
          .string('name', 255)
          .notNullable()
          .unique('uq_name');
        tbl
          .string('email', 255)
          .notNullable()
          .unique('uq_email');
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
