const path = require('path')

const server = require('./server')

const PORT = process.env.PORT || 3000

const envPath = path.join(__dirname, '.env')
require('dotenv').config({ path: envPath })

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', PORT)
})
