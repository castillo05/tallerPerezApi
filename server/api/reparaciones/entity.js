const Model = require('../model')
class Reparacion extends Model {
    static get tableName(){
        return 'reparacion'
    }

    static get idColumn(){
        return 'idReparacion';
    }
}

module.exports ={ Reparacion}