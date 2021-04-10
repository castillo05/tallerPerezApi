const express = require('express')

const router=express.Router();

const validator=require('./validator');

const { 
    test,
    getAuto,
    storeAuto,
    updateAuto,
    getAutosbyId,
    deleteAutosbyId
   
}= require('./controller');

router.get('/test',test);
router.get('',getAuto);
router.post('',validator('addAuto'),storeAuto);
router.put('/:id',validator('addAuto'),updateAuto);
router.get('/:id',getAutosbyId);
router.delete('/:id',deleteAutosbyId);


module.exports=router;