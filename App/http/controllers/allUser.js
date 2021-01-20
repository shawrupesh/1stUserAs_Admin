
const User=require('../../models/User')

function getAllUser()
{

return{

         userdata(req,res)
          {

//Finding user data and sending to UI
            User.find({}, function (err, allDetails) {
                if (err) {
                    console.log(err);
                } else {
                    
                   return res.render("alluser", { details: allDetails })
                }
               
        
            })
        },
        
    
          start(req,res)
          {
              
              return  res.render('start')
            
        
          }

        }
       }


module.exports=getAllUser;