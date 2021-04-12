const supertest=require('supertest');
const app = require('../app');
const { 
  Cliente
}= require('../api/clientes/repository')
test("GET /api/cliente", async () => {
    const post = await Cliente.find();
  
    await supertest(app).get("/api/cliente")
      .send(post)
      .expect(200)
      .then((response) => {
        
        expect(response.statusCode).toBe(200)
        expect(response.body.error).toBe(false);
        expect(response);
      });
  });

  test("POST /api/cliente",async () => {
    const body={
      nombre:'Jose',
      apellido:'Moreno',
      email:'jc211@gmail.com',
      telefono:'86165414',
      direccion:'Nicaragua'
    }
    await supertest(app).post("/api/cliente")
          .send(body)
          .then(response =>{
            console.log(response.body)
            expect(response.statusCode).toBe(409)
            expect(response.body.error).toBe(true)

          })
  })