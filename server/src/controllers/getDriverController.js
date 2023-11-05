const {Driver} = require("../db"); 
const axios = require("axios"); 


const cleanArray = (arr) => 
    arr.map((elem) => {
        return {
            id: elem.id,
            name: elem.name.forename,
            lastname: elem.name.surname,
            description: elem.description,
            image: elem.image,
            nationality: elem.nationality,
            birthdate: elem.dob,
            created: false, 
        };
    });


const getDriverController = async() => {

    const dataBaseDrivers = await Driver.findAll();

    const apiDriversRaw = (
        await axios.get("http://localhost:5000/drivers")
    ).data; 

    const apiDrivers = cleanArray(apiDriversRaw); 

    return [...dataBaseDrivers, ...apiDrivers]
}

module.exports = getDriverController; 
