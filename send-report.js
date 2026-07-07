import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

const TOKEN = process.env.TOKEN;
const CHAT_ID = process.env.CHAT_ID;

async function sendToTelegram() {
    const reportUrl = 'https://godishu17.github.io/wdio-saucedemo/';

    const message = `
 *Тесты WebdriverIO завершены!*

 *Allure Report:*
${reportUrl}
`;

    try {
        await axios.post(
            `https://api.telegram.org/bot${TOKEN}/sendMessage`,
            {
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            }
        );
        console.log('Уведомление ушло в телегу!');
    } catch (error) {
        console.error('Ошибка отправки:', error.message);
    }
}

sendToTelegram();