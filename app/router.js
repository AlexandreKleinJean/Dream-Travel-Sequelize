const { Router } = require('express');
/*const mainController = require('./controllers/mainController')*/
const sequelizeController = require('./controllers/sequelizeController')
const router = Router();

//-----------------------------General----------------------------//
router.get("/", sequelizeController.homePage)
router.get("/contact", sequelizeController.contact)

//------------------------Flights functions-----------------------//
router.get("/destinations", sequelizeController.destinationsList)
router.get("/destination/:id", sequelizeController.oneDestination)
router.get("/flightCompanies", sequelizeController.companiesList)
router.post("/destinations", sequelizeController.budgetDestinations)

//------------------------Hotels functions------------------------//
router.get("/hotels", sequelizeController.hotelsList)
router.post("/admin/addhotel", sequelizeController.addHotel)

//------------------------Admin operations------------------------//
router.get("/login", sequelizeController.login)
router.post("/login/admin", sequelizeController.admin)
router.post("/admin/addflight", sequelizeController.addFlight)

//----------------------------------------------------------------//
module.exports = router;