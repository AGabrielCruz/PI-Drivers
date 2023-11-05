const {Driver} = require("../db")

const createDriver = async (name, description, nationality) => {
    const newDriver = await Driver.create({name, description, nationality})
    return newDriver; 

}

module.exports = {createDriver}

