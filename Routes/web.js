
const newRegister=require('../app/http/controllers/newRegister')
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
   
    app.post('/register',newRegister().postRegister)

}

module.exports=initRoutes;