console.log("Child contact centre Web App");
import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
