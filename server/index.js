require('dotenv').config()
const express = require('express');
const path = require("path");
const PORT = 8080;
const db = require('./db.js')
const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

// controllers

const getAll = async (req, res) => {
  const workouts = await db.Fit.find({})
  res.status(201).send(workouts)
}

const insertOne = (req, res) => {
  db.Fit.create(req.body)
  // console.log('req.body: ', req.body)
  res.status(201).end()
}

const updateOne = async (req, res) => {
  try {
    const id = req.params.id
    console.log('ididid : ', id)
    const updated = await db.Fit.findByIdAndUpdate(id, req.body)
    res.status(201).send(updated);
  }
  catch (err) {
    res.status(400).end()
  }
}

var deleteOne = (req, res) => {
  const id = req.params._id
  db.Fit.findByIdAndDelete(id)
    .then(data => {

      res.status(200)
    })
    .catch(err => res.status(400).end());
}


app.get('/api/fitness', getAll)

app.post('/api/fitness', insertOne)

app.put('/api/fitness/:id', updateOne)

app.delete('/api/fitness/:id', deleteOne)


app.listen(PORT, () => {
  console.log(`Listening at PORT: ${PORT}`)
})