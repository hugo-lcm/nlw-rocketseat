import express, { response } from 'express'

const app = express()

app.get('/ads', (request, response) => {
    return response.send('ads')
})

app.listen(3333)