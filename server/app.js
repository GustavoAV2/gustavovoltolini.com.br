import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getVisitors, postVisitor } from "./visitorsService.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/visitor", async function (req, res) {
  try {
    const visitors = await getVisitors();
    res.send(visitors);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

app.post("/visitor", async function (req, res) {
  try {
    const newVisitor = req.body;
    const visitors = await postVisitor(newVisitor);
    res.send(visitors);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
