const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require('./config/db');
const leadRoutes = require('./routes/leadRoutes');

const app = express();

app.use(cors())
app.use(express.json());

app.get("/api/health", (req,res)=>{
    res.json({
        success: true,
        message: "Backend is working",
    })
})

app.use("/api/leads", leadRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();