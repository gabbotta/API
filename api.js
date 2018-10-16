const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

var courses_offered = [{id: 21, name: 'HCI'},
{id: 28, name:'sweng'}]


app.get('/', (req, res) => res.send('Ciao Max!'))

app.get('/courses', (req, res) => {
   res.json(courses_offered)
})

app.listen(PORT, () => console.log('Example app listening on port'+ PORT))
