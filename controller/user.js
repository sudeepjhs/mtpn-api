const User = require('../models/users');

exports.addUser = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    User.create({
        name: name,
        email: email
    }).then(result => {
        res.json({ success: "User Created"});
    }).catch(err => {
        res.json({error: "User email already exisit or Something went wrong" });
        // console.log(err);       
    })
}

exports.removeUser = async (req, res) => {
    const userId = req.body.userId;
    try {
    const user = await User.findOne({ where: { id: userId } });
        if (user == null) {
            return res.json({
                error: "User with id " + userId + " does not exists"
            });
        } else {
            await user.destroy();
            return res.json({
                success: "User with id " + userId + " successfully deleted"
            });
        }
    } catch (error) {
        return res.json({
            error: "Something went wrong"
        });
    }
}

exports.updateUser = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const userId = req.body.userId;
    try {
        const user = await User.findOne({ where: { id: userId } });
        if (user == null) {
            return res.json({
                error: "User with id " + userId + " does not exists"
            });
        } else {
            await user.update({
                name: name,
                email: email
            });
            return res.json({
                error: "User with id " + userId + " successfully updated"
            });
        }
    } catch (error) {
        return res.json({
            error: "User with id " + userId + " does not exists or Something went wrong"
        });
    }
}
exports.viewUser = async (req,res)=>{
    try {
        const user = await User.findAll({raw:true});
        return  res.json({users:user});
        
    } catch (error) {
        return res.json({
            error: "Something went wrong"
        });
    }
}