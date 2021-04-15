const {checkSchema} = require('express-validator');

const storeValidator =[
    checkSchema({
        marca:{
            isEmpty:{
                negated:true,
                errorMessage:'El campo nombre es requerido'
            }
        },
        modelo:{
            isEmpty:{
                negated:true,
                errorMessage:'El campo apellido es requerido'
            }
        },
        placa:{
            isEmpty:{
                negated:true,
                errorMessage:'El campo email es requerido'
            }
        },
        color:{
            isEmpty:{
                negated:true,
                errorMessage:'El campo telefono es requerido'
            }
        },
        idCliente:{
            isEmpty:{
                negated:true,
                errorMessage:'El campo direccion es requerido'
            }
        },

    })
]
module.exports = (option) => {
    switch (option) {
      case 'addAuto':{
        return storeValidator;
      }
     
      default:
        return [];
    }
  };
  