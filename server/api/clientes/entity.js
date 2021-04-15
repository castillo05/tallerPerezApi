const Model = require('../model')
const {Auto} = require('../autos/entity');
class Cliente extends Model {
    static get tableName(){
        return 'cliente'
    }

    static get idColumn(){
        return 'id';
    }

    static get relationMappings(){
        return {
            auto:{
                relation:Model.HasManyRelation,
                modelClass:Auto,
                join:{
                    from:'auto.idCliente',
                    to:'cliente.id'
                }
            }
        }
    }
}

module.exports ={ Cliente}