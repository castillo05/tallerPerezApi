const express = require('express')

const router=express.Router();

const validator=require('./validator');

const { 
    test,
    getClientes,
    storeCliente,
    updateCliente
}= require('./controller');

router.get('/test',test);
router.get('',getClientes);
router.post('',validator('addCliente'),storeCliente);
router.put('/:id',validator('addCliente'),updateCliente);

module.exports=router;