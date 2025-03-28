const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // Use Render's assigned PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
