const express = require('express');
const cors = require('cors');
const user = require("../routes/user");
const connectDb = require("../config/dbconnection");
const blogRoutes = require('../routes/blogRoutes'); // Import the blog routes
const crud = require('../routes/crud')
const college = require('../routes/college')
const {cloudinaryConnect }= require("../config/cloudinary")
const path = require("path");
require("dotenv").config({path : path.resolve(__dirname, "../.env")});
const eventRoutes = require("../routes/eventRoutes")
const homepageRoutes = require("../routes/homepageRoutes")
const collegeRep=require('../routes/collegeRep')
const app = express();

const corsOptions = {
    // origin: "http://localhost:5173",
    origin: "https://event-sphere-g11.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
    allowedHeaders:["Content-Type"],
    credentials: true,
};



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header(
        'Content-Security-Policy',
        "default-src 'self' https://vercel.live; " +
        "script-src 'self' https://vercel.live 'unsafe-inline'; " +
        "style-src 'self' 'unsafe-inline'; " +
        "img-src 'self' data:; " +
        "font-src 'self'; " +
        "connect-src 'self' https://vercel.live; " +
        "object-src 'none';"
    );
    next();
  });

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


const PORT =  3000;

app.use("/api/auth", user);
app.use("/api/blog", blogRoutes);
app.use("/api/users", crud);
app.use("/api/college",college)
app.use("/api/event",eventRoutes);
app.use("/api/asd",eventRoutes)
app.use("/api/home",homepageRoutes);
app.use("/api/collegeRep",collegeRep)

app.get("/", (req, res) => {
    res.send("Hello");
})

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(process.env.PORT)
        console.log(`Server is running at port: ${PORT}`);
    });
});
cloudinaryConnect();

module.exports = app;
