import mysql, { Connection } from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}
)

connection.connect(err =>{

    if(err){
        console.error('Error ao conectar ao Mysql:', err);
    }else{
        console.log('Conectado ao Mysql');
    }
})

export default connection;