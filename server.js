const { application } = require('express');
const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
const mysql = require('mysql2');

// express middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//mysql connection

const db = mysql.createConnection(
    {
        host:'localhost',
        //Your Mysql username,
        user: 'root',
        //Your Mysql password
        password:'',
        database:'election'
    },
    console.log('Connected to the election database.')
);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});


app.listen(PORT, () => {
    console.log('Server running on port 3002');
});