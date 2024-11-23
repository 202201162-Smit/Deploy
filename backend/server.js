const express = require('express');
const app = express();


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.use(express.json());

const PORT = process.env.PORT || 3000;

// app.use("/api/auth", user);
// app.use("/api/blog", blogRoutes);
// app.use("/api/users", crud);
// app.use("/api/college",college)
// app.use("/api/event",eventRoutes);
// app.use("/api/asd",eventRoutes)
// app.use("/api/home",homepageRoutes);
// app.use("/api/collegeRep",collegeRep)

app.get("/", (req, res) => {
    res.json("Hi");
})

    app.listen(PORT, () => {
        console.log(`Server is running at port: ${PORT}`);
    });