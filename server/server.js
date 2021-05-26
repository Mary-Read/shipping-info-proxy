const express = require('express');
const path = require('path');

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/../client/')))

app.get(['/', '/p/*'], (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});