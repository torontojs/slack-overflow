exports.handler = (event, context, callback) => {
  let axios = require('axios')
  let qs = require('querystring')

  let { text = '' } = qs.parse(event.body)

  let params = qs.stringify({
    site: 'stackoverflow.com',
    sort: 'votes',
    max: 5,
    q: text,
  })

  axios
    .get(`https://api.stackexchange.com/search/advanced?${params}`)
    .then(({ data }) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          response_type: 'in_channel',
          text: 'Perhaps one of these links can help!',
          attachments: [
            {
              text: data.items.map(q => q.title).join(/\n/),
            },
          ],
        }),
      })
    })
}
