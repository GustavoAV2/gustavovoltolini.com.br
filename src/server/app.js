import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { sendEmail } from './sendEmail.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/api/visitor", async function (req, res) {
  try {
    const emailInfos = req.body;
    console.log(emailInfos);
    await sendEmail(emailInfos.subject, emailInfos.message);
    res.send();
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
