import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {minify} from "html-minifier";
import fs from "fs";

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log('reload page');
  fs.readFile(__dirname + "/index.html", "utf-8", (err, data) => {
    console.log(data.length);
    const minFile = minify(data, {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
      removeTagWhitespace: true,
    });
    fs.writeFile(__dirname + "/index.min.html", minFile, () => {
      res.sendFile(__dirname + "/index.min.html");
    })
  })
});

app.listen(port, () => {
  console.log("localhost server start on port:", port);
});
