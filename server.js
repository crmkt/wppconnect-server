const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>✅ WPPConnect Server está rodando!</h1>
    <p>Mas a interface com QR Code ainda não foi ativada.</p>
  `);
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
