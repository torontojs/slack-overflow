exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: {
      response_type: 'in_channel',
      text: 'hey hey ' + event.body.text,
      attachments: [
        {
          text: event.body.text,
        },
      ],
    },
  })
}
//
// let x = {
//   response_type: 'in_channel',
//   text: 'hey hey hey hey',
//   attachments: [
//     {
//       text:
//         'token=ymUGTRodK0WKYWyYy5xKBPhS
//         &team_id=T06498HEJ&team_domain=torontojs
//         &channel_id=D1KKT88F9&channel_name=directmessage&user_id=U0DM6ATL6
//         &user_name=alex-wilmer&command=%2Fask
//         &text=test&response_url=https%3A%2F%2Fhooks.slack.com%2Fcommands%2FT06498HEJ%2F460413628161%2FBMqfjdU6U0rqRbEndJ27v01t&trigger_id=461217343157.6145289494.8d1e184af171c80184a7e2b214d10c91',
//     },
//   ],
// }
