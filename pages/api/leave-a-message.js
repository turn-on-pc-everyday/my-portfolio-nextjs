// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Pool } from 'pg'

const { env } = process

const { DATABASE_URL, USED_USER, USED_HOST, USED_DATABASE, USED_PASSWORD, USED_PORT, USED_URI } = env

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  user: USED_USER,
  host: USED_HOST,
  database: USED_DATABASE,
  password: USED_PASSWORD,
  port: USED_PORT,
  url: USED_URI
})

export default (req, res) => {
  const { name, phoneOrEmail, message } = req.body

  pool.query(
    `INSERT INTO messages (name, phone_or_email, message) VALUES ($1, $2, $3)`,
    [name, phoneOrEmail, message],
    (err, results) => {
      if(err) {
        res.status(400).json({ api_status: 0, message: `${err.name} : ${err.message}` })
      } else {
        res.status(200).json({ api_status: 1, message: 'success' })
      }
    }
  )
}