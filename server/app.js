const express = require('express')
const app = express()
const api= require('./api');
const swaggerDocumentCliente = require('./docs/swagger-doc.json');
const swaggerUi = require('swagger-ui-express')

// Super test
const supertest = require('supertest')
const request = supertest(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY,Origin,X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

  app.get('/api',(req,res)=>{
    res.json({
        database: "Welcome to Reparaciones Api",
        service: `Perez & Perez service is still running`,
    })
  })
  // Ruta test
  app.get('/test', async(req, res)=>{
    res.json({message: 'pass!'})
  })
  app.use('/api/docs-cliente',swaggerUi.serve,swaggerUi.setup(swaggerDocumentCliente));
  app.use('/api',api);

  module.exports =app;