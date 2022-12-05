import express from 'express';
import { getUsers, addUser } from '../Controllers/userController.js'

const router = express.Router();

router.get('/', getUsers)
router.post('/addUser', addUser);
export default router;

// export const getUsers = (req, res) => {
//     const userEmail = req.body;
//     userModel.find({}, (error, data) => {
//         if (data) {
//             res.json(data)
//         }
//         else {
//             res.json(error)
//         }
//     })
// }