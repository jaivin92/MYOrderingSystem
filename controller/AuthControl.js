import { StatusCodes } from "http-status-codes";
import BadRequestError from "../error/Bad-requestApi.js";
import UserModel from "../model/UserModel.js";
import UserList from '../model/UserList.js';

const register = async (req, res) => {
      const {email, password} = req.body
  
    if(!email || !password){
      throw new BadRequestError( "Please Fill All Field");
    } 
    const user = await UserModel.create({email,password})
    res.status(StatusCodes.CREATED).json({userModel:{
      email:user.email,
      password:user.password
   }})
}



const companyUserList = async (req,res) => {
  const datas = await UserList.find();  //get all in array list
  res.status(StatusCodes.OK).json({data: datas[0].UserList})
}

const login = async (req,res) =>{
  const {email, password} = req.body
  
  if(!email || !password){
    throw new BadRequestError( "Please Fill All Field");
  } 

  const userModel = await UserModel.findOne({email}).select('+password')
  if(!userModel){
      throw  new BadRequestError('Not Registered With Email')
  }
  console.log('user***', password, "  data-> ", userModel.password)
  if(userModel.password !== password){
      throw new BadRequestError('Invalid Password')
  } 
  
  userModel.password = undefined
  res.status(StatusCodes.OK).send({userModel})
  


}
export { register , companyUserList,login};
