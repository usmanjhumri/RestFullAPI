const {response} = require('express')

const {Users} = require('../../model/UserSchema.js')

const register = async (req, res) => { 
    const {
        username,
        email,
        password,
        phone,
    } = req.body

    try {
        const user = await Users.findeOne({email})
        console.log(user, ' users');
        if(user){
            res.send({ success: false, message: "This email is already exist" });
        }
    } catch (error) {
        
    }
}

module.exports = register