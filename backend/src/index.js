// import { connectDB } from "../db/index.js";
import {connectDB} from "./db/index.js"
import { app } from "./app.js";
import dotenv from "dotenv";
import { User } from "./routes/user.model.js";



dotenv.config(); 
connectDB()

app.get('/', (req, res)=>{
    res.send("This is response to your requeast to Server Application")
})

app.get('/creating-user', (req, res) => {
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

app.listen(process.env.PORT, ()=>{
    console.log(`Server Application has started at port ${process.env.PORT}`)
})