module.exports = app => {
  const players = require("../controllers/player.controller.js");

  var router = require("express").Router();
  const swaggerJSON = require('../../swagger.json');
  const swaggerUI = require('swagger-ui-express');

  // Player Endpoints
  router.post("/players", players.create);
  router.get("/players", players.findAll);
  router.get("/players/:id", players.findById);
  router.put("/players/:id", players.update);
  router.post("/players/exp/:id", players.getExperience);
  router.delete("/players/:id", players.delete);

  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON));

  // API prefix
  app.use("/api", router);
};
