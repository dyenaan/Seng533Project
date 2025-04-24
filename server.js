const express = require('express');
const app = express();

app.get('/compute', (req, res) => {
  res.json({ result: 42 });
});

app.listen(3000, () => {
  console.log('Node.js server running on port 3000');
});
