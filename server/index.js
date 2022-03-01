const server = require('./server')
const path = require('path')

const PORT = process.env.PORT || 3000

const envPath = path.join(__dirname, '.env')
require('dotenv').config({ path: envPath })

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', PORT)
})

// 1. I see your .env has been added to .gitignore. Why is it commented out?
// 2. Linting is better, but their are still 212 linting errors. Everyone should be linting
//    their code before committing it. After I ran npm run lint -- --fix on this branch, the number of linting errors
//    dropped to only 17, most of them for variables that used but not defined or vice versa (see screen shot)
// 3. It's interesting that I can submit a goal via either hitting the submit button OR pressing enter after
//    after typing a goal. Consider choosing one or the other method. If using a submit button, I would encourage 
//    you to move it to where the text is being entered. Right now, it looks totally disconnected and unintuitive.
// 4. Squish the `Warning: Each child in a list should have a unique "key" prop` from the browser console. Have no tolerance for red messages.
// 5. Continue to remove console.logs when they no longer are useful
