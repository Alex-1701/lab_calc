// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import {minify} from "html-minifier";
// import fs from "fs";
// import {networkInterfaces} from "os";
//
// const app = express();
// const port = 8080;
//
// app.use(cors());
// app.use(bodyParser.json());
//
// app.get("/", (req, res) => {
//   console.log('reload page');
//   fs.readFile(__dirname + "/index.html", "utf-8", (err, data) => {
//     console.log("original length", data.length);
//     const minFile = minify(data, {
//       removeAttributeQuotes: true,
//       collapseWhitespace: true,
//       removeComments: true,
//       minifyCSS: true,
//       minifyJS: true,
//       removeTagWhitespace: true,
//     });
//     console.log("minify length", minFile.length);
//     fs.writeFile(__dirname + "/index.min.html", minFile, () => {
//       res.sendFile(__dirname + "/index.min.html");
//     })
//   })
// });
//
// app.get("/manifest.json", (req, res) => {
//   res.sendFile(__dirname + "/manifest.json");
// });
//
// app.listen(port, () => {
//   console.log("localhost server start on port:", port);
//
//   // This code for identify and show IP in local network
//   const nets = networkInterfaces();
//   const results = Object.create(null);
//
//   for (const name of Object.keys(nets)) {
//     for (const net of nets[name]) {
//       // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
//       // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
//       const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
//       if (net.family === familyV4Value && !net.internal) {
//         if (!results[name]) {
//           results[name] = [];
//         }
//         results[name].push(net.address);
//       }
//     }
//   }
//   console.log(results);
// });


const express = require('express')
import {networkInterfaces} from "os";

const app = express()
const port = 3000
app.use(express.static('./'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log("localhost server start on port:", port);

  // This code for identify and show IP in local network
  const nets = networkInterfaces();
  const results = Object.create(null);

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
      const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
      if (net.family === familyV4Value && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }
  console.log(results);
});
