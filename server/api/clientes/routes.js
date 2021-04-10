const express = require('express')

const router=express.Router();

const validator=require('./validator');

const { 
    test,
    getClientes,
    storeCliente
}= require('./controller');

router.get('/test',test);
router.get('',getClientes);
router.post('',validator('addCliente'),storeCliente);

module.exports=router;