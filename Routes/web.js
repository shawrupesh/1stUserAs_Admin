
const newRegister=require('../app/http/controllers/newRegister')
//const getBalance=require('../app/http/controllers/GetBalance')

//const addFund = require('../app/http/controllers/addFund')
//const spendFund = require('../app/http/controllers/spendFund')
const getAllUser= require('../app/http/controllers/allUser')
const getAllRoles= require('../app/http/controllers/UserRoles')
const start= require('../app/http/controllers/start')


function initRoutes(app) {
      //Get Request Routing
    
    app.get('/',start().starts)
    app.get('/register',newRegister().register)
   app.get('/allregistered',getAllUser().userdata)
    app.get('/aallregistered',getAllUser().start)
   app.get('/role',getAllRoles().userdata)


    //Post request Routes
   /// app.post('/addfund',addFund().postAddFund)
   // app.post('/spendfund',spendFund().postSpend)
   // app.post('/balance',getBalance().Getbalance)
    app.post('/register',newRegister().postRegister)

}

module.exports=initRoutes;