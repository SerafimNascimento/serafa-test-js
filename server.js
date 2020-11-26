const express = require('express')
const axios = require("axios")
const cors = require("cors")
const app = express()
const port = 3000

app.use(cors())

app.get('/pokemon', async (request, response) => {

  const moves = await axios.get("https://pokeapi.co/api/v1/pokemon/25").then(res => res.data.moves)
  
  const a = moves.map(item => {
    return "ataque: " + item.move.name
  })

  response.send(a)

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
