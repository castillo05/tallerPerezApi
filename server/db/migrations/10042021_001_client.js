exports.up=(knex)=>{
    return knex.schema.createTable('cliente',(table)=>{
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('apellido').notNullable();
        table.string('email').notNullable();
        table.integer('telefono').notNullable();
        table.string('direccion').notNullable();
        table.timestamps(true, true);
    })
}

exports.down=(knex)=>{
    return knex.schema.dropTable('cliente');
}