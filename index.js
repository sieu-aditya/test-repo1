const express = require("express");
const app = express();

const kidneys = [
  {
    name: "John",
    kidney1: true,
    kidney2: false,
  },
  {
    name: "Parth",
    kidney1: false,
    kidney2: false,
  },
];

app.get("/", function (req, res) {
  // to check how many kidneys they have and their health

  const total = kidneys.length * 2;
  let ans = "";
  kidneys.forEach((ele) => {
    ans +=
      "name:" +
      ele.name +
      " with kidney helath:-" +
      " kidney1 - " +
      ele.kidney1 +
      " kidney2 - " +
      ele.kidney2;
    ans += "--------------";
  });
  res.send(ans);
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
