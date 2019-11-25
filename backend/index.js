import express from "express";
import path from "path";

import cityList from "./city.list.min.json.js";
import { DataBase } from "./DataBase.js";

const db = new DataBase(cityList, "name");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/cities", (req, res) => {
  const { name, count = 20 } = req.query;

  res.setHeader("Access-Control-Allow-Origin", "*");

  if (typeof name === "undefined" || isNaN(+count) || count < 1) {
    res.status(400).send();
  } else {
    db.find(name).then(data => {
      const cities = data
        .sort((a, b) => b.coefficient - a.coefficient)
        .slice(0, count);

      res.status(200).send({ cnt: cities.length, list: cities });
    });
  }
});

const staticPath = path.join(path.resolve(), "build");

app.use(express.static(staticPath));

app.get("*", (_, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`start listening on ${PORT}`);
});
