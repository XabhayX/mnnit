import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

export const verifyAccessToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  // console.log(req.headers)
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // console.log("Verified USe")
    req.user = decoded; // You now have user._id, regNo, etc.
    // User.
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};



export const isAdmin = async (req, res, next) =>{
  // console.log("req.user: ", req.user);
  const user = await User.findOne({"regNo" : `${req.user.regNo}`})

  if(!user) return res.status(401).json({ message: 'Unauthorized.' });

  if(user.role == 'admin') next();
  if(user.role != 'admin') return res.status(401).json({ message: 'Unauthorized.' });
}


export const isGuesting = async (req, res, next) =>{
  // console.log("req.user: ", req.user);
  const user = await User.findOne({"regNo" : `${req.user.regNo}`})

  if(!user) return res.status(401).json({ message: 'Unauthorized.' });

  if(user.role == 'guest') return res.status(401).json({ message: 'Unauthorized.' });

  return next();
}