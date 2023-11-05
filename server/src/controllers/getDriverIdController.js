const axios = require("axios");
const {Driver} = require("../db")

const getDriverIdController = async (id , source) => {
    const driver = 
    source === "api"
    ? (await axios.get(`http://localhost:5000/drivers/${id}`)).data
    : await Driver.findByPk(id)

    return driver;
}

module.exports = getDriverIdController; 


