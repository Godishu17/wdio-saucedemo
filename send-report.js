import axios from 'axios';
import fs from 'fs';

const TOKEN = '8796229238:AAFz5taKfdgaZitbF7KFZw1ljmfj4g8WeGg';
const CHAT_ID = '-5260352159';

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