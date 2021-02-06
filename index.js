// start your server here
const server = require('./api/server')

const PORT = 5001;

server.listen(PORT, ()=>{
    console.log(`**** SERVER IS RUNNING ON PORT : ${PORT} ***`);
})