

const { Router } = require("express");
const router = Router();
const driverRouter = require("./driverRouter");
const teamsRouter = require("./teamsRouter") 


router.use("/drivers", driverRouter); 
router.use("/teams", teamsRouter)


module.exports = router;  


