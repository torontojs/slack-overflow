exports.handler = (event, context, callback) => {
  let qs = require('querystring')
  let body = qa.parse(event.body)

  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      response_type: 'in_channel',
      text: `Question: ${body.text}`,
      attachments: [
        {
          text: '...',
        },
      ],
    }),
  })
}
