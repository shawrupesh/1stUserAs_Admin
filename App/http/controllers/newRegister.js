const User =require('../../models/User')
const User_Role=require('../../models/User_Role')
function newRegister()
{

return{

         register(req,res)
          {
              
              return  res.render('newRegister')
            
          },

         
         postRegister(req,res)
          {
              let role='admin';
            const {name,email,phone}=req.body
            console.log(req.body)



     //validating user
     if(!name || !email || !phone)

     {
       req.flash('error',"All field are required")
       req.flash('name',name)
       req.flash('phone',email)
       req.flash('amount',phone)

       return res.redirect('/register')

      }



   //check if number exist
   User.exists( {phone:phone},(error,result)=>{

    if(result)
            {

             req.flash('error',"  Phone is  already Registred")
            
             //req.flash('name',name)
             //req.flash('phone',phone)

             return res.redirect('/register')

            }
else    {



//checking collection existence in database
User_Role.countDocuments (function(err, count) {
  console.dir(err);
  console.dir(count);
  if( count == 0) {

    role='Admin'
    console.log("No Found Records.");
  }

  else
  {
    role='Customer'
    console.log(role)

  }
                                   //Insertung data in User_roles table
  

                                   const userRole = new User_Role({
                                    phone,
                                    role:role,
                                  
                                  })
                                   userRole.save().then((user) => {
                                  
                                    console.log("user_role table updated")
                                  
                                   }).catch(err =>{
                                  
                                     req.flash('error',"something is wrong")
                                    
                                   // return res.redirect('/register')
                                  
                                   })
                                        
                                  
                                  })
                                  


   //Inserting additional information of user in User Table

                 // console.log("personal wallet")
                      const user = new User({
                            name,
                             email,
                             phone
                          })

                          user.save().then((user) => {
                            console.log("registered")
                            return res.redirect('/')
                            
                            }).catch(err =>{
                            
                            req.flash('error',"something is wrong")
                            console.log(err)
                            
                            
                            
                            })


}




       }  )


         
            
          }





       }

}
module.exports=newRegister;