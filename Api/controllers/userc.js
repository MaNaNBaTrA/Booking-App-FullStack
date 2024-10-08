import User from "../Models/User.js";

export const UpdateUser = async (req,res,next)=> {
    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new:true});
        res.status(200).json(updatedUser);
    }
    catch(err){
       next(err)
    }
}
export const DeleteUser = async (req,res,next)=> {
    try{
        await User.findByIdAndDelete( req.params.id);
        res.status(200).json("User has been deleted");
    }
    catch(err){
        next(err)
    }
}
export const GetUser = async (req,res,next)=> {
    try{
        const users = await User.findById(req.params.id);
        res.status(200).json(users);
    }
    catch(err){
        next(err)
    }
}
export const GetAllUser = async (req,res,next)=> {
    try{
        const Users = await User.find();
        res.status(200).json(Users);
    }
    catch(err){
        next(err)
    }
}