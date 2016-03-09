
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table){
    table.increments();
    table.string('email').unique().notNullable();
    table.string.('password').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};