const express = require('express')

const router=express.Router();

const validator=require('./validator');

const { 
    test,
    getReparacion,
    storeReparacion,
    updateReparacion,
    getReparacionbyId,
    deleteReparacionbyId,
    getReparacionbyIdAuto
   
}= require('./controller');

router.get('/test',test);
router.get('/',getReparacion);
router.post('/',validator('addReparacion'),storeReparacion);
router.put('/:id',validator('addReparacion'),updateReparacion);
router.get('/:id',getReparacionbyId);
router.delete('/:id',deleteReparacionbyId);
router.get('/auto/:id',getReparacionbyIdAuto);

module.exports=router;