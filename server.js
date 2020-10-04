const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const { Thought, Reaction, User } = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Notedb', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

// User Routes
// post user route

app.post('/user', ({ body }, res) => {
  User.create(body)
    .then(dbNote => {
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get('/user', (req, res) => {
  User.find({})
    .then(dbNote => {
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

app.delete('/user/:username', ({ params }, res) => {
  User.findOneAndDelete({ username: params.username })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No user found with this id!' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

// Thought Routes
// post Thought Route

app.post('/Thought', ({ body }, res) => {
  Thought.create(body)
    .then(dbNote => {
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get('/thought', (req, res) => {
  Thought.find({})
    .then(dbNote => {
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

app.delete('/thought/:id', ({ params }, res) => {
  Thought.findOneAndDelete({ _id: params.id })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No thought found with this id!' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
