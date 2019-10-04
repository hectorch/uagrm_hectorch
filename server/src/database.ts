import mysql from 'mysql';
import keys from './keys';

const { promisify }= require('util');

const pool = mysql.createPool(keys.database);

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.release();
    console.log('DB is connected');
})
pool.query = promisify(pool.query);
export default pool;