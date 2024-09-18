const express = require("express");

const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is Running on the ${PORT} `);
});
app.use("/", (req, res) => {
  res.json({ status: 200 });
});
