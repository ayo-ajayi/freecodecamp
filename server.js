const dotenv = require("dotenv");
dotenv.config();
const express = require("express"),
  PORT = process.env.PORT || 3000,
  app = express();

app.get("/", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase")
    res.json({ message: "HELLO JSON" });
  else res.json({ message: "Hello json" });
});

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
