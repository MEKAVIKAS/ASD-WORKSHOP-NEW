const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express()
const port = 3000

const PathToFile = path.join(__dirname, 'db.json');


async function readFile() {
try {
  let  data = await fs.readFile(PathToFile, 'utf-8');
  return JSON.parse(data);
} catch (error) {
    console.log(error);
}
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})