const bodyParser = require('body-parser');
const express = require('express');
const Sequelize = require('sequelize');
const app = express();
const port = 8000;

const sequelize = new Sequelize('customers', 'root', 'test', {
  dialect: 'mysql'
})

app.use(express.static('./public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.send('index.html');
})

app.post('/', (req, res) => {
  //console.log(req)
  console.log('here is the body', req.body)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})