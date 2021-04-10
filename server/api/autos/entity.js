const Model = require('../model')
class Auto extends Model {
    static get tableName(){
        return 'auto'
    }

    static get idColumn(){
        return 'idAuto';
    }
}

module.exports ={ Auto}