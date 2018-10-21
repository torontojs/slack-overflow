exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      response_type: 'in_channel',
      text: 'hey hey ' + event.body.text,
      attachments: [
        {
          text: event.body.text,
        },
      ],
    }),
  })
}
