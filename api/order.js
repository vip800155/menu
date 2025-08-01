export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { order, message } = req.body;
  if (!order || !Array.isArray(order) || !order.length) {
    return res.status(400).json({ error: 'Нет данных заказа' });
  }
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token) {
    return res.status(500).json({ error: 'Нет токена Telegram' });
  }
  if (!chatId) {
    return res.status(500).json({ error: 'Нет chat_id Telegram' });
  }
  let text = 'Новый заказ:\n' + order.map(item => '- ' + item).join('\n');
  if (message) {
    text += `\n\nЛичное сообщение для повара:\n${message}`;
  }
  console.log('TELEGRAM TEXT:', text);
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const tgRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text })
    });
    const data = await tgRes.json();
    if (data.ok) {
      res.status(200).json({ ok: true });
    } else {
      res.status(500).json({ error: data.description || 'Ошибка Telegram' });
    }
  } catch (e) {
    res.status(500).json({ error: 'Ошибка соединения с Telegram' });
  }
} 