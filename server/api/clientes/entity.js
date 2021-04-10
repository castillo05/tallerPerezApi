const Model = require('../model')
class Cliente extends Model {
    static get tableName(){
        return 'cliente'
    }

    static get idColumn(){
        return 'id';
    }
}

module.exports ={ Cliente}