const { Router } = require("express");
const teamsRouter = Router();
const getTeamsHandler = require("../handlers/getTeamsHandler");


teamsRouter.get("/", getTeamsHandler)

module.exports = teamsRouter;