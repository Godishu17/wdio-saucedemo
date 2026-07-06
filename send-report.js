import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';
import fs from 'fs';

const TOKEN = process.env.TOKEN;
const CHAT_ID = process.env.CHAT_ID;

// Читаем данные из упавшего теста, если нужно, но пока отправим простую алерту
async function sendToTelegram() {
    const message = `🚀 *Тесты WebdriverIO завершены!*\n📊 Посмотреть отчет локально: \`npx allure serve allure-results\``;

    try {
        await axios.post(
            `https://api.telegram.org/bot${TOKEN}/sendMessage`,
            {
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            }
        );
        console.log('✅ Уведомление улетело в телегу!');
    } catch (error) {
        console.error('❌ Ошибка отправки:', error.message);
    }
}

sendToTelegram();