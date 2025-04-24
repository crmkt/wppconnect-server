const wppconnect = require('@wppconnect-team/wppconnect');
const axios = require('axios');

wppconnect.create({
  session: 'carol-session',
  catchQR: (base64Qr, asciiQR) => {
    console.log('QR RECEBIDO:', asciiQR);
  },
  headless: true,
}).then((client) => {
  client.onMessage(async (message) => {
    if (message.isGroupMsg && !message.fromMe) {
      console.log('📥 Mensagem recebida:', message.body);

      // Envia pro webhook do n8n
      try {
        await axios.post('https://SEU_DOMINIO_N8N.webhook/editar-mensagem', {
          text: message.body,
          from: message.from,
          name: message.sender?.pushname || '',
        });
      } catch (err) {
        console.error('❌ Erro ao enviar pro n8n:', err.message);
      }
    }
  });
});
