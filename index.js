const express = require('express')
const app =  express()
const PORT = 3000;

app.get('/', (req, res) =>{
    res.json({
        msg: "youre on the 3000"
    });
})
app.get('/birds', (req, res) => {
    res.json({
        msg: "OH GOD THE BIRDS"
    });
})
app.get('/birds/id/:id', (req, res) => {
    res.json({
        msg: 'BIRD COP WANTS YOUR ID-index'
    });
})
app.get('/birds/type/:type', (req, res) =>{
    res.json({
        msg: "I aint got no TYPE bad birdies are the only thing that i like"
    });
})
app.get('/birds?city=nyc', (req, res) =>{
    res.json({
        msg: 'From NEEEWWWWW YOOOORRRRRK'
    });
})
app.get('/birds?type=pigeon', (req, res) =>{
    res.json({
        msg: 'will respond with all the birds ofg this type'
    })
})


app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})