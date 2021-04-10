exports.up=(knex)=>{
    return knex.schema.createTable('reparacion',(table)=>{
        table.increments('idReparacion').primary();
        table.integer('idAuto').notNullable();
        table.string('descripcion').notNullable();
        table.string('costo').notNullable();
        table.datetime('fechaEntrada').notNullable();
        table.datetime('fechaSalida').notNullable();
        table.timestamps(true, true);
    })
}

exports.down=(knex)=>{
    return knex.schema.dropTable('reparacion');
}