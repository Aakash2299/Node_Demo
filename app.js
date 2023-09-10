const express = require('express');
const oracledb =  require('oracledb');
const app = express();
const PORT = 5000;

app.get('/', (req, res) =>{
    res.send("Hello User...")
});

app.get('/emp', (req, res) =>{
    async function fetchData(){
        try {
            const connection = await oracledb.getConnection({
                user : 'system',
                password : 'system',
                connectionString : 'localhost/xe'
            });

            const result = await connection.execute('SELECT * FROM EMP WHERE E_ID = 100;');
            return result.rows;

        } catch (error) {
            return error;
        }
    }

    fetchData()
    .then(dbRes =>{
        res.send(dbRes);
    })
    .catch(err =>{
        res.send(err);
    });
});

app.listen(PORT,()=>{
    console.log("The server is up and running on port ", PORT)
})
