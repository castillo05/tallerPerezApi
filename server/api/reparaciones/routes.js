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
router.get('',getReparacion);
router.post('',validator('addReparacion'),storeReparacion);
router.put('',validator('addReparacion'),updateReparacion);
router.get('/detail',getReparacionbyId);
router.delete('',deleteReparacionbyId);
router.get('/auto',getReparacionbyIdAuto);

module.exports=router;