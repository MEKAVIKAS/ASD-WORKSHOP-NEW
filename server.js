const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express()
const port = 3000

const PathToFile = path.join(__dirname, 'db.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})