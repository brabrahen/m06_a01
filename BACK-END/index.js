const express = require('express');
const cors = require('cors')
const port = 3001;
const route = require("./src/routes/paletas.routes")
const app = express();
app.use(cors())

app.use(express.json());

app.use("paletas", route)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
