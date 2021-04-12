const app = require('./app')
const db= require('./db');
require('dotenv').config()
const PORT= process.env.PORT || 3001;

const server=app.listen(PORT,async()=>{
    try {
        console.log(`Api running on port ${PORT}`);
        // Migraciones
        const migration = await db.migrate.latest();
        // const seed = await db.seed.run();
        console.log(`Batch ${migration[0]} run: ${migration[1].length} migrations`);
        migration[1].length ? migration[1].map((i) => console.log(i)) : "";
    } catch (error) {
        console.log(error)
    }
    

})