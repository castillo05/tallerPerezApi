const express = require('express')

const router=express.Router();

const validator=require('./validator');

const { 
    test,
    getClientes,
    storeCliente,
    updateCliente,
    getClientesbyId,
    deleteClientesbyId
}= require('./controller');

router.get('/test',test);
router.get('',getClientes);
router.post('',validator('addCliente'),storeCliente);
router.put('/:id',validator('addCliente'),updateCliente);
router.get('/:id',getClientesbyId);
router.delete('/:id',deleteClientesbyId);


module.exports=router;