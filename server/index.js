const app = require('./app')

const server=app.listen(3001,async()=>{
    try {
        console.log(`Api running on port 3001`);
    } catch (error) {
        console.log(error)
    }
    

})