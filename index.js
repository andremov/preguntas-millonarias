import express from "express";

const app = express();

app.get("/", function (req, res) {
  console.log("Received request.");

  const responseObject = { message: "Exito." };

  return res.status(200).json(responseObject);
});

app.listen(3000, () => {
  console.log("Now listening.");
});
