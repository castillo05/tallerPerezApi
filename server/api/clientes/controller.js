const { 
    ClienteRepository
}= require('./repository')

const test=async(req,res)=>{
    res.json({message: 'Test controlador clientes'})
}

module.exports={
    test
}