import {getVisitors, postVisitor} from './visitorsService.js';
import express from "express";

var app = express();

app.use((req, res, next) => {
  const token = req.headers.authorization;
  const expectedToken = '**********';

  if (token === expectedToken) {
      next();
  } else {
      res.status(401).json({ error: 'Unauthorized' });
  }
});


app.get("/visitor", async function (req, res) {
    let visitors = await getVisitors();
    res.send(visitors);
});

app.post("/visitor", async function (req, res) {
    let visitors = await postVisitor(req.body);
    res.send(visitors);
});

app.listen(3000, function () {
  console.log("Api listening on port 3000!");
});
