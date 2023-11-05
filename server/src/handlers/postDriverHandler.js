const { createDriver } = require("../controllers/postDriverController");

const postDriverHandler = async (req , res) => {

    try {
        const {name, description, nationality} = req.body
        const newDriver = await createDriver(name, description, nationality);
        res.status(201).json(newDriver);
          
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = postDriverHandler; 