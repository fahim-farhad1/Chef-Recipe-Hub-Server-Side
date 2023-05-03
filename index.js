const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const allChefsData = require("./allChefData.json");

app.get("/chefs", (req, res) => {
  res.send(allChefsData);
});
app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const chef = allChefsData.find((chef) => chef.id === id) || {};
  res.send(chef);
});

app.listen(3000, () => {
  console.log("server is runing on port 3000");
});
