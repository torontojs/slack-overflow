exports.handler = (event, context, callback) => {
  let axios = require('axios')
  let qs = require('querystring')

  //trim off white space from the body
  let { text } = qs.parse(event.body)

  let params = qs.stringify({
    site: 'stackoverflow.com',
    sort: 'votes',
    pagesize: 5,
    q: text,
  })

  let respond = body =>
    callback(null, {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

  // if the text value is null just send a response skip the api call.
  if (!text) {
    respond({
      response_type: 'in_channel',
      text:
        'Woops! Looks like you forgot your question! Correct format: `/ask <question_here>`',
    })
  } else {
    axios
      .get(`https://api.stackexchange.com/search/advanced?${params}`)
      .then(({ data }) => {
        respond({
          response_type: 'in_channel',
          text: `Perhaps one of these links can help!
${data.items
            .map(
              q => `⬆️ *${q.score.toLocaleString()}* - <${q.link}|${q.title}>`,
            )
            .join('\n')}`,
        })
      })
      .catch(error => respond({ text: error.message }))
  }
}
