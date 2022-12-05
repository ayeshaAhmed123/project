import userModel from '../Models/UserSchema.js'

export const getUsers = (req, res) => {
    userModel.find({}, (error, data) => {
        if (data) {
            console.log(data)
            res.json(data)
        }
        else {
            res.json(error)
        }
    })
}

export const addUser = async (req, res) => {
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();
    console.log(user)
    res.json(user);
}