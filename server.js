const bodyParser = require('body-parser');
const express = require('express');
const Sequelize = require('sequelize');
const app = express();
const port = 8000;

const sequelize = new Sequelize('customers', 'root', 'test', {
  dialect: 'mysql'
})

const User = sequelize.define('users', {
  name: Sequelize.STRING,
  email: Sequelize.TEXT,
  password: Sequelize.TEXT
}, {
  timestamps: false
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
  User
    .build({name: req.body.name, email: req.body.email, password: req.body.password})
    .save()
    .then(() => {
      console.log('login info sent to database!')
    })
    .catch((err) => {
      console.log('not loaded to the database :(', err)
    })
  res.send('success')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})