const express = require('express')
const app = express()
const port = 3000
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
app.use(express.static('public'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/money', async(req, res) =>{
    const url = 'https://api.api-ninjas.com/v1/quotes?category=money';
    const options = {
        method: 'GET',
        headers: {
            'X-API-Key': process.env.SECRET_KEY,
        
        },
        contentType: 'application/json',
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json()
        res.json(result)
    } catch (error) {
        console.error(error);
    }

})

app.get('/humor', async(req, res) =>{
    const url = 'https://api.api-ninjas.com/v1/quotes?category=humor';
    const options = {
        method: 'GET',
        headers: {
            'X-API-Key': process.env.SECRET_KEY,
        
        },
        contentType: 'application/json',
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json()
        res.json(result)
    } catch (error) {
        console.error(error);
    }

})
app.get('/riddle', async(req, res) =>{
    const url = 'https://api.api-ninjas.com/v1/riddles';
    const options = {
        method: 'GET',
        headers: {
            'X-API-Key': process.env.SECRET_KEY,
        
        },
        contentType: 'application/json',
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json()
        res.json(result)
    } catch (error) {
        console.error(error);
    }

})

app.get('/jokes', async(req, res) =>{
    const url = 'https://api.api-ninjas.com/v1/jokes?limit=1';
    const options = {
        method: 'GET',
        headers: {
            'X-API-Key': process.env.SECRET_KEY,
        
        },
        contentType: 'application/json',
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json()
        res.json(result)
    } catch (error) {
        console.error(error);
    }

})