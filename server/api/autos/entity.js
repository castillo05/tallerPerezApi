const Model = require('../model')
const {Reparacion} = require('../reparaciones/entity');
class Auto extends Model {
    static get tableName(){
        return 'auto'
    }

    static get idColumn(){
        return 'idAuto';
    }

    static get relationMappings(){
        return {
            reparacion:{
                relation:Model.HasManyRelation,
                modelClass:Reparacion,
                join:{
                    from:'auto.idAuto',
                    to:'reparacion.idAuto'
                }
            }
        }
    }
}

module.exports ={ Auto}