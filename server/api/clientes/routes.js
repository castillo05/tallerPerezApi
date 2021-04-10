const express = require('express')

const router=express.Router();

const { 
    test,
    getClientes,
    storeCliente
}= require('./controller');

router.get('/test',test);
router.get('',getClientes);
router.post('',storeCliente);

module.exports=router;