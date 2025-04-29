
// Envia pro webhook do n8n
try {
        await axios.post('https://n8n-production-9d818.up.railway.app/webhook/editar-mensagem
', {
          text: message.body,
          from: message.from,
          name: message.sender?.pushname || '',
        });
        const response = await axios.post('https://n8n-production-9d818.up.railway.app/webhook/editar-mensagem', {
  text: message.body,
  from: message.from,
  name: message.sender?.pushname || '',
});

// número fixo para testes (exemplo: WhatsApp internacional no formato 55 + DDD + número + "@c.us")
const numeroDestino = '5511992570404@c.us';

if (response.data && response.data.mensagem) {
  await client.sendText(numeroDestino, response.data.mensagem);
} else {
  console.log('⚠️ Resposta do n8n não veio como esperado:', response.data);
}

} catch (err) {
console.error('❌ Erro ao enviar pro n8n:', err.message);
}
