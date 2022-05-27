const {
    brand,
    item,
    Sequelize
   } = require("./../models");

   const Op = Sequelize.Op;
let self = {};
self.getAll = async (req,res) => {
 try{
  let data = await brand.findAll({
   attributes:["id","name"]
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