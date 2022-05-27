const {User} = require('./../models/user')
const { Sequelize} = require('./../models')
const Op = Sequelize.Op
let self = {};
self.getAll = async(req,res) => {
    try{
        let data =  await User.findAll()
        return res.status(200).json({
            status :"ok",
            data :data
        })
    }catch(error){
        res.status(500).json({
            status :"error",
            data: error
        })
    }

}
module.exports = self;