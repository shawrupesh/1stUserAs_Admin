
const User_Role=require('../../models/User_Role')

function getAllRoles()
{

return{

         userdata(req,res)
          {


            User_Role .find({}, function (err, allDetails) {
                if (err) {
                    console.log(err);
                } else {
                    
                   return res.render("role", { details: allDetails })
                   console.log(details)
                }
              
              
            
        
            })
        },
        
    
         

        }
       }


module.exports=getAllRoles;