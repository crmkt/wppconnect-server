const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect
  .create({
    session: 'carol-session',
    catchQR: (base64Qr, asciiQR, attempts, urlCode) => {
      console.log('QR RECEBIDO', asciiQR);
    },
    statusFind: (statusSession, session) => {
      console.log('Status da sessão:', statusSession);
    },
    headless: true,
    devtools: false,
    useChrome: false
  })
  .then((client) => start(client))
  .catch((error) => console.log(error));

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'ping') {
      client.sendText(message.from, 'pong');
    }
  });
}
