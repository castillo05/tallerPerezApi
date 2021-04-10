const Base = require('../baseRepository');

const { 
    Auto
}= require('./entity');

class AutoRepository extends Base{
    constructor(props) {
        super(props);
        
    }

    getModel(){
        return Auto
    }
    
}

module.exports = { 
    Auto: new AutoRepository
}