import mysql from 'mysql'
import 'dotenv/config'

const dbconfig: mysql.ConnectionConfig = {
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    port     : Number(process.env.DB_PORT),
    database : process.env.DB_DATABASE
  }
  
  let mysqlConn = mysql.createConnection(dbconfig)
  
  const createMysqlConn = () => {
  
    mysqlConn.connect((err) => {
      if(err) {
        console.log('error when connecting to db:', err);
        mysqlConn = mysql.createConnection(dbconfig)
      }
    });
  
    mysqlConn.on('error', (err) => {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') {
        mysqlConn = mysql.createConnection(dbconfig)
      } else {
        throw err;
      }
    });
  
    return mysqlConn
  }
  
  const hmconn = createMysqlConn()