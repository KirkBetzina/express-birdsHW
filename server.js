const express = require('express');
const birds = require('./BirdDb');
const app =  express()
const PORT = 3000;

app.get('/', (req, res) =>{
    res.json({
        msg: "youre on the 3000"
    });
})
app.get('/birds', (req, res) => {
    let bird = birds.filter((bird) => {
        return bird.id === req.params.id
    })
    if(bird){
        res.json({
            status: 200,           
            msg: 'BIRD COP WANTS YOUR ID-index',
            bird: birds

    });
    } else {
        res.json({
            status: 404,
            msg: `cannot find anything at the index ${req.params.id}`
        });
    }
})
app.get('/birds/id/:id', (req, res) => {
    // const bird = birds[req.params.id]

    let bird = birds.filter((bird) => {
        return bird.id === req.params.id
    })
     

    if(bird){
        res.json({
            status: 200,           
            msg: 'BIRD COP WANTS YOUR ID-index',
            bird: birds[0]

    });
    } else {
        res.json({
            status: 404,
            msg: `cannot find anything at the index ${req.params.id}`
        });
    }
    
})
app.get('/birds/type/:type', (req, res) =>{
    let bird = birds.filter((bird) => {
        return bird.type === req.params.type
    })
    if(bird){
        res.json({
            status: 200,           
            msg: 'BIRD COP WANTS YOUR ID-index',
            bird: birds[7]

    });
    } else {
        res.json({
            status: 404,
            msg: `cannot find anything at the index ${req.params.id}`
        });
    }
})
app.get('/birds/query/city', (req, res) => {
    console.log('this is query', req.query)
        const city = req.query.city
        const bird = birds.filter(bird => bird.city == city)
       
       res.json({
            bird: bird
        })
 })
 const filterBirdsByType = (birds, type) => {
    return birds.filter(bird => bird.type === type);
  };
  app.get("/birds/type/:type", (request, response) => {
    
    response.json(filterBirdsByType(birds, "pigeon"));
  });

// const filterBirdsByCity = (birds, city) => {
//     return birds.filter(bird => bird.city === city);
//   };
// app.get("/cities/:name", (request, response) => {
    
//     response.json(filterBirdsByCity(birds, "NYC"));
//   });


app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})