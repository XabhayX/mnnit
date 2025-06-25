// import { connectDB } from "../db/index.js";
import {connectDB} from "./db/index.js"
import { app } from "./app.js";
import dotenv from "dotenv";
import { User } from "./models/user.model.js";
import { Department } from "./models/resource.model.js";
import { Subject } from "./models/subject.model.js";
import multer from 'multer'
import {v2 as cloudinary} from 'cloudinary'
import {Topic} from "./models/topic.model.js";

dotenv.config();  

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


connectDB()

app.get('/', (req, res)=>{
    res.send("This is response to your requeast to Server Application")
})

app.get('/create-user', (req, res) => {
    res.send(`
        <html>
        <head><title>Create User</title></head>
        <body>
            <h1>Create a New User</h1>
            <form action="/create-user" method="POST">
                <input type="text" name="userName" placeholder="Username" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="text" name="regNo" placeholder="Reg No" required />
                <select name="role" required>
                    <option value="student">Student</option>
                    <option value="staff">Staff</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Create User</button>
            </form>
        </body>
        </html>
    `);
});


app.post('/create-user', async (req, res)=>{
    console.log(req.body)
    await User.create(req.body).then(
        res.send('Details Accepted')
    )
})

app.post('/api/get-departments', async (req, res)=>{
    // console.log(Department.)
    try {
        const departments = await Department.find();
        // console.log(departments)
        res.send(departments);
    } catch (err) {
        console.log(err)
         res.status(500).json({ error: 'Internal Server Error' });
    }
} )
app.post('/api/get-subjects', async (req, res)=>{
    const departmentId = req.body.departmentId
    // console.log(departmentId)
    try {
        const subjects = await Subject.find({departmentId: `${departmentId}`});
        // console.log(subjects)
        res.send(subjects);
    } catch (err) {
        console.log(err)
         res.status(500).json({ error: 'Internal Server Error' });
    }
} )

app.post('/api/get-topics-list', async (req, res)=>{
    const {branchParam, subjectParam} = req.body
    try {
        // const foundbBranch = await Department.find({departmentId: branchParam})
        const foundSubject = await Subject.findOne({departmentId: branchParam, subjectID: subjectParam}).populate("topics")
        console.log(Array.isArray( foundSubject.topics))
        

        res.send(foundSubject.topics);
    } catch (err) {
        console.log(err)
         res.status(500).json({ error: 'Internal Server Error' });
    }
} )





const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    }, 
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage})

// app.post('/api/get-topics', upload.single('resourceFile') , async (req, res)=>{
//     console.log('get-topics recieved')
//     // const file = req.file; 
//     // const title = req.body;
//     console.log(req.body.title)
//     console.log(req.body.uploadedBy)
//     console.log(req.body.subject)
//     console.log(req.file)


//     const uploadFile =  async()=>{
            
//         try {
//            await cloudinary.uploader.upload(req.file.path, {
//         folder: 'resources'
//     })
//         } catch (error) {
//             console.error(error)      
//         }
// }
    
//     uploadFile()
//   res.send({ message: 'File received' });
// } )


app.post('/api/get-topics', upload.single('resourceFile'), async (req, res) => {
  console.log('get-topics received');

  const { title, uploadedBy, subject } = req.body;
  
  console.log('Title:', title);
  console.log('Uploaded By:', uploadedBy);
  console.log('Subject:', subject);
//   console.log('File:', req.file);

  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

  try {
    const cloudinaryResult = await cloudinary.uploader.upload(req.file.path, {
      folder: 'resources'
    });

    console.log('Cloudinary Upload Result:', cloudinaryResult);

    // Optionally save to MongoDB here (with title, subject, uploadedBy, and cloudinaryResult.secure_url)

    res.status(200).json({ 
      message: 'File received and uploaded to Cloudinary',
    //   fileUrl: cloudinaryResult.secure_url,
    //   public_id: cloudinaryResult.public_id
    });


    const foundSubject = await Subject.findOne({subjectID: subject});
    const topicUrl = cloudinaryResult.secure_url;

    console.log(topicUrl)

    const createdTopic = await Topic.create({
    title: `${title}`, 
    topicUrl: `${topicUrl}`,
    uploadedBy: `${uploadedBy}`, 
    subject: foundSubject._id
    // subject: `${subject}`, 
  })

    foundSubject.topics.push(createdTopic._id)
    foundSubject.save();

  } catch (err) {
    console.error('Cloudinary Upload Error:', err);
    res.status(500).json({ message: 'Cloudinary upload failed', error: err.message });
  }

   
});











app.post('/api/create-department', async (req, res)=>{
    console.log(req.body)
    await Department.create(req.body).then(
        res.send('Department Details Accepted')
    ).catch((Err)=>{console.error("Error while creating this department. Err: ", Err)})
})

app.post('/api/create-subjects', async (req, res)=>{
    console.log(req.body)
    await Subject.create(req.body).then(
        res.send('Subject Details Accepted')
    ).catch((Err)=>{console.error("Error while creating this subject. Err: ", Err)})
})


app.listen(process.env.PORT, ()=>{
    console.log(`Server Application has started at port ${process.env.PORT}`)
})