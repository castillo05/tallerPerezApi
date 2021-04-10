const Base = require('../baseRepository');

const { 
    Cliente
}= require('./entity');

class ClienteRepository extends Base{
    constructor(props) {
        super(props);
        
    }

    getModel(){
        return Cliente
    }
    
}

module.exports = { 
    Cliente: new ClienteRepository
}