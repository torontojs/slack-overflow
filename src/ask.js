exports.handler = (event, context, callback) => {
  let axios = require('axios')
  let qs = require('querystring')

  let { text = 'babel eslint error' } = qs.parse(event.body)

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

  axios
    .get(`https://api.stackexchange.com/search/advanced?${params}`)
    .then(({ data }) => {
      respond({
        response_type: 'in_channel',
        text: `Perhaps one of these links can help!
${data.items
          .map(q => `⬆️ *${q.score.toLocaleString()}* - <${q.link}|${q.title}>`)
          .join('\n')}`,
      })
    })
    .catch(error => respond({ text: error.message }))
}
