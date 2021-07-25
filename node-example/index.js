const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Full Cycle</h1>')
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})