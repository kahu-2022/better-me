import request from 'superagent'

const rootUrl = '/betterme/api/'

// Comment: both api.js and goals.js contain api's relating to goals. Consider putting these in one file
export function getGoals () {
    return request.get(`${rootUrl}/`)
      .then(res => {
				return res.body.gaols
			})
			.catch(logError)
}

export function updateGoal (goal, auth0Id, token)

function logError (err) {
	if(err.message === 'Forbidden') {
		throw new Error('only the user who added the goal, may delete or edit the goal')
	} else {
		console.error(
			'Error consuming the API (in client/api/api.js):',
			err.message
		)
		throw err
	}
}