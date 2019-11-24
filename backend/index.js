import express from "express";

import cityList from "./city.list.min.json.js";
import { DataBase } from "./DataBase.js";

const db = new DataBase(cityList, "name");

const app = express();
const PORT = 8080;

app.get("/cities", (req, res) => {
  const { name, count = 20 } = req.query;

  res.setHeader("Access-Control-Allow-Origin", `http://localhost:${PORT}`);

  if (typeof name === "undefined" || isNaN(+count)) {
    res.status(400).send({ code: 400, message: "Bad Request" });
  } else {
    db.find(name).then(data => {
      const cities = data
        .sort((a, b) => b.coefficient - a.coefficient)
        .slice(0, count);

      res.status(200).send({ cnt: cities.length, list: cities });
    });
  }
});

app.listen(PORT, () => {
  console.log(`start listening on ${PORT}`);
});
