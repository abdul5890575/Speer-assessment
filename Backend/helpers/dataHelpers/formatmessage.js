const moment = require('moment');
//formats the message into object so keys can be extracted and displayed at front end
function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a')
  };
}

module.exports = formatMessage;