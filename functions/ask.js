exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      response_type: 'in_channel',
      text: 'hey hey hey hey',
      attachments: [
        {
          text: event.body,
        },
      ],
    }),
  })
}
