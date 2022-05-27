const {
    user,
    item,
    Sequelize
   } = require("./../models");

   const Op = Sequelize.Op;
let self = {};
self.getAll = async (req,res) => {
 try{
  let data = await user.findAll({
   attributes:["id","firstName"]
  });
  return res.json({
   status:"ok",
   data:data
  })
 }catch(error){
  res.status(500).json({
   status:"error",
   data:error
  })
 }
}

module.exports = self;