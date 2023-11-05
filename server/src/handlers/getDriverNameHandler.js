const getDriverNameController = require("../controllers/getDriverNameController")


const getDriverNameHandler = async (req, res) => {
    const name = req.query.name;
  
    try {
      const results = await getDriverNameController(name);
      res.status(200).json(results);
    } catch (error) {
      res.status(404).json({ error: "El piloto no existe" });
    }
  };


module.exports = getDriverNameHandler;