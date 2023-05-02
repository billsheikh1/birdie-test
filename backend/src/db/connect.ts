import * as mysql from 'mysql'
import { Pool } from 'mysql'
import * as dotenv from 'dotenv'
dotenv.config()

const makeConnection = (): Pool => {
  const pool = mysql.createPool({
    host: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(<string>process.env.PORT, 10),
  })

  pool.getConnection((err) => {
    if (err) return console.error('Conn err ' + err)
    console.log('connected')
  })
  return pool
}

export const pool = makeConnection()
