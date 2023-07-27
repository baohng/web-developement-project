import express from "express";
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let brandName = "";

app.use(bodyParser.urlencoded({extended: true}));

//GET ("/")
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
});

function brandNameGenerate(req, res, next) {
  console.log(req.body);
  brandName = req.body["street"] + req.body["pet"];
  next();
};

app.use(brandNameGenerate);

app.post("/submit", (req, res) => {
  res.send(`Your brand name is \n ${brandName}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
