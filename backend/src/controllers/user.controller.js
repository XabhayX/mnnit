
import { Subject } from '../models/subject.model.js';
import { Topic } from '../models/topic.model.js';
import { User } from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';


export const registerUser = asyncHandler(async (req, res) => {
  const form = req.body;

  if (!form) {
    return res.status(400).json({ message: "No form data received." });
  }

  

  if (await User.findOne({ regNo: form.regNo }) || await User.findOne({ email: form.email })) return res.status(500).json({
    message: "This user already exists",
    data: form.fullName
  })

  await User.create({
    regNo: form.regNo,
    email: form.email,
    role: form.role,
    fullName: form.fullName,
    password: form.password,
  });


  // console.log(form)
  res.status(200).json({
    message: "Form received successfully.",
    data: form.fullName,
  });
});


export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // console.log(email, password)
  if (!email || !password) {
    return res.status(400).json({ message: "Please provide both email and password." });
  }

  const foundUser = await User.findOne({ email: email });
  if (!foundUser) return res.status(404).send("User not found.")

  if(!(await foundUser.isPasswordCorrect(password))) return res.status(401).send("email or password is wrong")

 const accessToken = foundUser.generateAccessToken();

    res.status(200).send({
      email: foundUser.email,
      fullName: foundUser.fullName,
      contributions: foundUser.contributions,
      role: foundUser.role,
      regNo: foundUser.regNo,
      accessToken
    })
    
})

export const getContribution = asyncHandler(async (req, res) => {
  //  console.log(req.body);

  const foundUser = await User.findOne({ regNo: req.body.regNo }).populate('contributions');

  if (!foundUser) return res.status(500).send("Invalid Auth");

  //  console.log("Contribution by foundUser", foundUser.contributions);

  const sendContributions = await Promise.all(
    foundUser.contributions.map(async (contribution) => {
      const subject = await Subject.findById(contribution.subject);
      //  console.log("found subject:", subject);

      return {
        title: contribution.title,
        link: contribution.topicUrl,
        subject: subject.subjectName
      };
    })
  );

  //  console.log("sending Contri", sendContributions);

  res.status(200).send(sendContributions);
});

