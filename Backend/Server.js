const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS
app.use(cors({
  origin: "https://code-xreview.vercel.app", // Allow only your frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow necessary methods
  credentials: true // Allow cookies if needed
}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
