const { 
    Auto
}= require('./repository')
const {validationResult}= require('express-validator');

const test=async(req,res)=>{
    res.json({message: 'Test controlador Autos'})
}

// Listando Autos

const getAuto=async(req,res)=>{
   try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(409).send({ errors: errors.formatWith(formatError).mapped() });
    else {
    const data = await Auto.find();

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
const storeAuto=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(409).send({ errors: errors.array() });
        else {

        const search= await Auto.findOne({placa: req.body.placa});

        if(!search){
            const data= await Auto.insert(req.body);

            return res.status(200)
            .send({
                error: false,
                message: 'Auto created successfully',
                data: data,
            });
        }else{
            return res.status(409)
            .send({
                error: true,
                message: 'Este auto ya existe',
                data: '',
            });
        }
        
    }
    } catch (error) {
        console.log(error)
    }
}

// Actualizar Autos
// Guardar Autos
const updateAuto=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(409).send({ errors: errors.array() });
        else {

        const idAuto=req.params.id
        if(!idAuto){
            return res.status(409).send({
                error: false,
                message: 'Es necesario el identificador del usuario',
                data: '',
            })
        }

        const search= await Auto.findById(idAuto);

        if(search){
            const data= await Auto.update(req.body).where("idAuto",idAuto);

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

const getAutosbyId=async(req,res)=>{
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
     const data = await Auto.findById(idAuto);
 
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
 

//  Eliminar Autos

const deleteAutosbyId=async(req,res)=>{
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
     const data = await Auto.deleteById(idAuto);
 
     if(!data) return res.status(404).send({error: 'Error eliminando el Auto, posiblemente no exista'})
 
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
    getAuto,
    storeAuto,
    updateAuto,
    getAutosbyId,
    deleteAutosbyId
}