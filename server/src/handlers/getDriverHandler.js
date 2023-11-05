const getDriverController = require("../controllers/getDriverController")

    

const getDriverHandler = async (req, res) => {

    try { 
        const results = await getDriverController();
        res.status(200).json(results);
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }



   


}

module.exports = getDriverHandler; 