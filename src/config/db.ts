import pgFunction from 'pg-promise'
import 'dotenv/config'
const initOptions = {
    receive (data: any, result: any, e: any) {
      camelizeColumns(data)
    },
    query (e: any) {
      console.log(e.query)
    }
  }
  
  const pgp = pgFunction(initOptions)
  
  const cn = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  }
  
  console.log(cn)
  
  const db = pgp(cn)
  
  // Camelize column names
  function camelizeColumns (data: any) {
    const tmp = data[0]
    for (const prop in tmp) {
      const camel = pgp.utils.camelize(prop)
      if (!(camel in tmp)) {
        for (let i = 0; i < data.length; i++) {
          const d = data[i]
          d[camel] = d[prop]
          delete d[prop]
        }
      }
    }
  }

  export { pgp, db }