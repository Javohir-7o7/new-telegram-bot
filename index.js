require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { getLastPostId } = require('./src/gram.js');
const keyboards = require('./src/keyboards.js')

console.log('Бот запущен...');
const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.setMyCommands([
    { command: '/start', description: 'Запустить бота' },
    { command: '/stop', description: 'Выключить бота' }
]);

const userData = {};

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    console.log(msg.from)
    bot.sendMessage(chatId, 'hello')
});
