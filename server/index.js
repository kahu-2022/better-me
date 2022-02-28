const server = require('./server')
const path = require("path")
// 

const PORT = process.env.PORT || 3000

const envPath = path.join(__dirname, ".env");
require('dotenv').config({ path: envPath })

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', PORT)
})
// GENERAL COMMENTS
// 1. .env - Looks like you forgot to ask this to your gitignore file
// 2. The code as pulled down is not functional - I cannot add goals, etc.
// 3. As you are done using them for debugging, remove console.logs
// 4. There are 606 linting errors and 5 warnings. These will cause you undue stress when merging branches.
//    Use npm run lint to see these and consider adding
//    a script to package.json to fix all auto-fixable problems.
// 5. The git tree is getting messy. Consider deleting the branches that you are no longer using.
