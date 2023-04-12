import express from 'express'
import {register,companyUserList,login} from '../controller/AuthControl.js';
const router = express.Router();

// post methods 
router.route('/register').post(register);
router.route('/login').post(login);

router.route('/userList').get(companyUserList)

export default router;