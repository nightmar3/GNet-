
const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'KralGNetwork.aternos.me',
  port: 25565,
  username: 'GNet_Bot'
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  if (message === 'ping') {
    bot.chat('pong');
  }
});
