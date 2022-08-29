import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

// для передачи статических файлов
// app.use(express.static("./"));

app.get("/", (req, res) => {
  console.log('lel');
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log("localhost server start on port:", port);
});
