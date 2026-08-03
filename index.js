const TelegramBot = require("node-telegram-bot-api");

const token = "8883131698:AAEdftKxOyFl9xeN7IK9tHfhPmu-umdn2GA";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  await bot.sendMessage(chatId, "🎉 Welcome!\nAapka welcome hai.");

  // Agle step me video, APK aur channel check add karenge.
});
