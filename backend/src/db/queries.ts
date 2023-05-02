import { Pool } from 'mysql'

const makeQuery = (
  pool: Pool,
  query: string,
  options?: string[]
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    pool.query(query, options, (err, res) => {
      if (err) return reject(err)
      resolve(res)
    })
  })
}

const getEventsByCareRecipientId = (
  pool: Pool,
  id: string
): Promise<unknown> => {
  const query = 'SELECT * FROM events WHERE care_recipient_id = ?'
  const options = [id]
  return makeQuery(pool, query, options)
}

export { getEventsByCareRecipientId }
