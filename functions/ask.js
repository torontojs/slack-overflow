exports.handler = (event, context, callback) => {
  callback(null, {
    response_type: 'in_channel',
    text: 'hey hey hey hey',
    attachments: [
      {
        text: event.body,
      },
    ],
  })
}
