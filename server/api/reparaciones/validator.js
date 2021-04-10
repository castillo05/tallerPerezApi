const {checkSchema} = require('express-validator');

const storeValidator =[
    checkSchema({
        idAuto:{
            isEmpty:{
                negated:true,
                errorMessage:'El campo idAuto es requerido'
            }
        },
        descripcion:{
            isEmpty:{
                negated:true,
                errorMessage:'El campo descripcion es requerido'
            }
        },
        costo:{
            isEmpty:{
                negated:true,
                errorMessage:'El campo costo es requerido'
            }
        },
        fechaEntrada:{
            isEmpty:{
                negated:true,
                errorMessage:'El campo fechaEntrada es requerido'
            }
        },
        // fechaSalida:{
        //     isEmpty:{
        //         negated:true,
        //         errorMessage:'El campo fechaEntrada es requerido'
        //     }
        // },

    })
]
module.exports = (option) => {
    switch (option) {
      case 'addReparacion':{
        return storeValidator;
      }
     
      default:
        return [];
    }
  };
  