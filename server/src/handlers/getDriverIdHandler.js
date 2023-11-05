const getDriverIdController = require("../controllers/getDriverIdController")


const getDriverIdHandler = async (req, res) => {
    const {id} = req.params;
    const source = isNaN(id) ? "bdd" : "api";

    try {
        const driver = await getDriverIdController(id , source);
        res.status(200).json(driver)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}

module.exports = getDriverIdHandler; 