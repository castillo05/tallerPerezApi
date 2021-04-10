exports.up=(knex)=>{
    return knex.schema.createTable('auto',(table)=>{
        table.increments('idAuto').primary();
        table.string('marca').notNullable();
        table.string('modelo').notNullable();
        table.string('placa').notNullable();
        table.integer('color').notNullable();
        table.integer('idCliente').notNullable();
        table.timestamps(true, true);
    })
}

exports.down=(knex)=>{
    return knex.schema.dropTable('auto');
}