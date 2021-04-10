const {checkSchema} = require('express-validator');

const storeValidator =[
    checkSchema({
        nombre:{
            isEmpty:{
                negated:true,
                errorMessage:'El campo nombre es requerido'
            }
        },
        apellido:{
            isEmpty:{
                negated:true,
                errorMessage:'El campo apellido es requerido'
            }
        },
        email:{
            isEmpty:{
                negated:true,
                errorMessage:'El campo email es requerido'
            }
        },
        telefono:{
            isEmpty:{
                negated:true,
                errorMessage:'El campo telefono es requerido'
            }
        },
        direccion:{
            isEmpty:{
                negated:true,
                errorMessage:'El campo direccion es requerido'
            }
        },

    })
]
module.exports = (option) => {
    switch (option) {
      case 'addCliente':{
        return storeValidator;
      }
     
      default:
        return [];
    }
  };
  