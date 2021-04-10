const { 
    Reparacion
}= require('./repository')
const {validationResult}= require('express-validator');

const test=async(req,res)=>{
    res.json({message: 'Test controlador Reparacion'})
}

// Listando Autos

const getReparacion=async(req,res)=>{
   try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(409).send({ errors: errors.formatWith(formatError).mapped() });
    else {
    const data = await Reparacion.find().orderBy('created_at','desc');

    if(!data) return res.status(404).send({error: 'Error getting data'})

    // res OK
    return res.status(200)
    .send({
      error: false,
      message: '',
      data: data,
    });
}
   } catch (error) {
       console.log(error)
   }
}

// Guardar Autos
const storeReparacion=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(409).send({ errors: errors.array() });
        else {

        
            const data= await Reparacion.insert(req.body);

            return res.status(200)
            .send({
                error: false,
                message: 'Auto created successfully',
                data: data,
            });
       
        
    }
    } catch (error) {
        console.log(error)
    }
}

// Actualizar Autos
// Guardar Autos
const updateReparacion=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(409).send({ errors: errors.array() });
        else {

        const idReparacion=req.params.id
        if(!idReparacion){
            return res.status(409).send({
                error: false,
                message: 'Es necesario el identificador del usuario',
                data: '',
            })
        }

        const search= await Reparacion.findById(idReparacion);

        if(search){
            const data= await Reparacion.update(req.body).where("idReparacion",idReparacion);

            return res.status(200)
            .send({
                error: false,
                message: 'Auto updated successfully',
                data: data,
            });
        }else{
            return res.status(409)
            .send({
                error: true,
                message: 'Este usuario no existe',
                data: '',
            });
        }
        
    }
    } catch (error) {
        console.log(error)
    }
}


// Listando Autos por id

const getReparacionbyId=async(req,res)=>{
    try {
     const errors = validationResult(req);
     if (!errors.isEmpty()) return res.status(409).send({ errors: errors.formatWith(formatError).mapped() });
     else {
    const idReparacion=req.params.id;
    if(!idReparacion){
        return res.status(409).send({
            error: false,
            message: 'Es necesario el identificador del usuario',
            data: '',
        })
    }
     const data = await Reparacion.findById(idReparacion);
 
     if(!data) return res.status(404).send({error: 'Error getting data'})
 
     // res OK
     return res.status(200)
     .send({
       error: false,
       message: '',
       data: data,
     });
 }
    } catch (error) {
        console.log(error)
    }
 }
 

//  Autos de clientes 

const getReparacionbyIdAuto=async(req,res)=>{
    try {
     const errors = validationResult(req);
     if (!errors.isEmpty()) return res.status(409).send({ errors: errors.formatWith(formatError).mapped() });
     else {
    const idAuto=req.params.id;
    if(!idAuto){
        return res.status(409).send({
            error: false,
            message: 'Es necesario el identificador del usuario',
            data: '',
        })
    }
     const data = await Reparacion.find().where({idAuto:idAuto});
 
     if(!data) return res.status(404).send({error: 'Error getting data'})

     if(data.length<=0) return res.status(404).send({
        error: true,
        message: 'No hay reparaciones para este Auto',
        data: data,
     })
 
     // res OK
     return res.status(200)
     .send({
       error: false,
       message: '',
       data: data,
     });
 }
    } catch (error) {
        console.log(error)
    }
 }
 

//  Eliminar Autos

const deleteReparacionbyId=async(req,res)=>{
    try {
     const errors = validationResult(req);
     if (!errors.isEmpty()) return res.status(409).send({ errors: errors.formatWith(formatError).mapped() });
     else {
    const idReparacion=req.params.id;
    if(!idReparacion){
        return res.status(409).send({
            error: false,
            message: 'Es necesario el identificador del usuario',
            data: '',
        })
    }
     const data = await Reparacion.deleteById(idReparacion);
 
     if(!data) return res.status(404).send({error: 'Error eliminando el Reparacion, posiblemente no exista'})
 
     // res OK
     return res.status(200)
     .send({
       error: false,
       message: 'Auto eliminado con exito',
       data: data,
     });
 }
    } catch (error) {
        console.log(error)
    }
 }
 

module.exports={
    test,
    getReparacion,
    storeReparacion,
    updateReparacion,
    getReparacionbyId,
    deleteReparacionbyId,
    getReparacionbyIdAuto
}