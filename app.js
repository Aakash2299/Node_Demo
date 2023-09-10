const express = require('express')
const app = express()
const PORT = 4000

app.get('/', (req, res) =>{
    res.send("Hello User...")
})

app.listen(PORT,()=>{
    console.log("The server is up and running on port ", PORT)
})
