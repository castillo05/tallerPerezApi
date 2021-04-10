const { 
    Cliente
}= require('./repository')

const test=async(req,res)=>{
    res.json({message: 'Test controlador clientes'})
}

// Listando Clientes

const getClientes=async(req,res)=>{
   try {
    const data = await Cliente.find();

    if(!data) return res.status(404).send({error: 'Error getting data'})

    // res OK
    return res.status(200)
    .send({
      error: false,
      message: '',
      data: data,
    });
   } catch (error) {
       console.log(error)
   }
}

// Guardar clientes
const storeCliente=async(req,res)=>{
    try {
        const data= await Cliente.insert(req.body);

        return res.status(200)
      .send({
        error: false,
        message: 'Cliente created successfully',
        data: data,
      });
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    test,
    getClientes,
    storeCliente
}