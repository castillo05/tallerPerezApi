const { 
    Cliente
}= require('./repository')
const {validationResult}= require('express-validator');

const test=async(req,res)=>{
    res.json({message: 'Test controlador clientes'})
}

// Listando Clientes

const getClientes=async(req,res)=>{
   try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(409).send({ errors: errors.formatWith(formatError).mapped() });
    else {
    const data = await Cliente.find();

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

// Guardar clientes
const storeCliente=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(409).send({ errors: errors.array() });
        else {

        const search= await Cliente.findOne({email: req.body.email});

        if(!search){
            const data= await Cliente.insert(req.body);

            return res.status(200)
            .send({
                error: false,
                message: 'Cliente created successfully',
                data: data,
            });
        }else{
            return res.status(409)
            .send({
                error: true,
                message: 'Este correo ya existe',
                data: '',
            });
        }
        
    }
    } catch (error) {
        console.log(error)
    }
}

// Actualizar clientes
// Guardar clientes
const updateCliente=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(409).send({ errors: errors.array() });
        else {

        const id=req.params.id
        if(!id){
            return res.status(409).send({
                error: false,
                message: 'Es necesario el identificador del usuario',
                data: '',
            })
        }

        const search= await Cliente.findById(id);

        if(search){
            const data= await Cliente.update(req.body).where("id",id);

            return res.status(200)
            .send({
                error: false,
                message: 'Cliente updated successfully',
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

module.exports={
    test,
    getClientes,
    storeCliente,
    updateCliente
}