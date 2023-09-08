const express = require('express');
const app = express();
const port = 8080;
const knex = require('knex')(require('./knexfile.js')["development"])

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(express.json());
//DEFAULT PAGE
app.get('/', (req, res) => {
    res.send('Application running, Please Use an Endpoint For API discovery')
})

//LISTEN PORT
app.listen(port, () => {
    console.log('Knex and Express applications running successfully')
})

//GET movies PAGE 
app.get('/movies', (req, res) => {
    knex('movie_list')
        .select('*')
        .then(data => res.status(200).json(data))
        .catch((err) => res.status(500).json(err));
})

//GET movies by id
app.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    knex('movie_list')
        .where('id', id)
        .then(data => res.status(200).json(data))
        .catch((err) => res.status(500).json(err));
})

//POST movies
app.post('/movies', (req, res) => {
    const newLog = req.body;
    knex('movie_list')
        .insert(newLog)
        .then(() => res.status(201).json('New movie has been added.'))
        .catch((err) => res.status(500).json(err));
});
//PATCH workout logs
app.patch('/movies/:id', (req, res) => {
    const id = req.params.id;
    const updatedMovie = req.body;
    knex('movie_list')
        .where('id', id)
        .update(updatedMovie)
        .then(() => res.json('Movie has been updated.'))
        .catch((err) => res.status(500).json(err));
});
//DELETE Movie
app.delete('/movies/:id', (req, res) => {
    const id = req.params.id;
    knex('movie_list')
        .where('id', id)
        .del()
        .then(() => res.json('Movie selection has been deleted.'))
        .catch((err) => res.status(500).json(err));
});

app.get('/movies', (req, res) => {
    knex('movie_list')
        .select('*')
        .then(data => res.status(200).json(data))
        .catch((err) => res.status(500).json(err));
})
