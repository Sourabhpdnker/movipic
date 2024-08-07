import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import { createPost } from "./controllers/posts.js"
import { register } from "./controllers/auth.js";
import { verifyToken } from "./middleware/auth.js";
import Post from "./models/Post.js";
import User from "./models/user.js";
import { users, posts } from "./data/index.js"

// configurations
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

//file storage 
const storage = multer.diskStorage({
    destination: function (req, file, cd) {
        cd(null, "public/assets")
    },
    filename: function (req, file, cd) {
        cd(null, file.originalname);
    }
});
const upload = multer({ storage });

//ROUTES WITH FILE
app.post("/auth/register", upload.single("picture"), register);  //MIDDLEARE FUNCTION
app.post("/posts", verifyToken, upload.single("picture"), createPost)

// routes 
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

// MONGOOSE SETUP 
const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`sever port : ${PORT}`));

    //add data one time
    // User.insertMany(users);
    // Post.insertMany(posts);
})
    .catch((error) => console.log(`${error} did not connect `));
