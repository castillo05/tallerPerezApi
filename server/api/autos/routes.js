const express = require('express')

const router=express.Router();

const validator=require('./validator');

const { 
    test,
    getAuto,
    storeAuto,
    updateAuto,
    getAutosbyId,
    deleteAutosbyId,
    getAutosbyIdCliente
   
}= require('./controller');

router.get('/test',test);
router.get('',getAuto);
router.post('',validator('addAuto'),storeAuto);
router.put('',validator('addAuto'),updateAuto);
router.get('/detail',getAutosbyId);
router.delete('',deleteAutosbyId);
router.get('/cliente',getAutosbyIdCliente);


module.exports=router;