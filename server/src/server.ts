import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
   return response.json(
      [
         {"name": "John"},
         {"name": "Greg"}
      ]
   );
})

app.listen(3333);