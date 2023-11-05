
// const {Driver} = require("../db"); 
// const axios = require("axios"); 


// const cleanArray = (arr) => 
//     arr.map((elem) => {
//         return {
//             id: elem.id,
//             name: elem.name.forename,
//             lastname: elem.name.surname,
//             description: elem.description,
//             image: elem.image,
//             nationality: elem.nationality,
//             birthdate: elem.dob,
//             created: false, 
//         };
//     });


// const getDriverNameController = async (name) => {

//     const dataBaseDrivers = await Driver.findAll({where: {name : name}});

//     const apiDriversRaw = (
//         await axios.get("http://localhost:5000/drivers")
//     ).data; 

//     const apiDrivers = cleanArray(apiDriversRaw); 

//     const driversFiltered = apiDrivers.filter((driver)=> driver.name == name);
   
//     return [...driversFiltered , ...dataBaseDrivers] 

// }                      


// module.exports = getDriverNameController; 


const { Driver } = require("../db");
const axios = require("axios");

const cleanArray = (arr) => {
  return arr.map((elem) => {
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
};

const getDriverNameController = async (name) => {
  const dataBaseDrivers = await Driver.findAll({ where: { name: name } });

  const apiDriversRaw = (await axios.get("http://localhost:5000/drivers")).data;

  const apiDrivers = cleanArray(apiDriversRaw);

  // Filtra la lista de pilotos de la API por nombre
  const driversFiltered = apiDrivers.filter((driver) => driver.name.toLowerCase().includes(name.toLowerCase()));

  // Devuelve la lista de pilotos filtrada, combinada con la lista de pilotos de la base de datos
  return [...driversFiltered, ...dataBaseDrivers];
};


module.exports = getDriverNameController; 