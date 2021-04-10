const Base = require('../baseRepository');

const { 
    Reparacion
}= require('./entity');

class ReparacionRepository extends Base{
    constructor(props) {
        super(props);
        
    }

    getModel(){
        return Reparacion
    }
    
}

module.exports = { 
    Reparacion: new ReparacionRepository
}