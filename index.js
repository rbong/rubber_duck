var Bot = require('slackbots');

var settings = {
  token: process.env.RUBBER_DUCK_TOKEN,
  name: 'Rubber Duck'
};

var bot = new Bot(settings);

var messages = ['Interesting...', 'Please, tell me about more.',
  'Have you tried turning it off and on again?', 'What could be the problem?',
  'That\'s weird.', 'I don\'t understand.', 'Can you elaborate?',
  'I don\'t know man.', 'I\'m just a duck.', 'I\'m not even real.',
  'Please, continue.', 'What does that do?', 'What else?', 'Oh, ok.',
  'What?', 'Yup.', 'Quack.', 'So where\'s the problem?'];

function getMessage() {
  return messages [Math.floor(Math.random() * (messages.length + 1))];
}

bot.on('message', function (message) {
  // private message
  if (message.type === 'message' && message.channel[0] !== 'C') {
    setTimeout(function() {
      bot.postMessage(message.user, getMessage(), { as_user: true });
    }, 1250);
  }
});
