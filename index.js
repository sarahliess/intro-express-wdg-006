const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// console.log(process.env.PORT);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//helfen uns, den req.body zu parsen
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app
  .route("/")
  .get((req, res) => {
    res.status(200).send("Hello");
    // console.log("success");
  })
  //step 2
  .put((req, res) => {
    res.status(200).sendFile("./views/index.html", { root: __dirname });
    console.log(__dirname);
  })
  //step 3
  .delete((req, res) => {
    res.status(200).json({ good: "yep" });
  });

//step 7
app.post("/show-post", (req, res) => {
  console.log("body", req.body);
  res.status(200).send(`Hello ${req.body.firstname} ${req.body.lastname}`);
});

//step 8
app.get("/show-get", (req, res) => {
  res.status(200).sendFile("./views/input.html", { root: __dirname });
  console.log("success");
});

//step 9
app.get("/number/:id/:name/:title", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  res.send(`The ID is ${id}`);
});

//step 10
app.get("/postList", async (req, res) => {
  const { data } = await axios.get(
    "http://jsonplaceholder.typicode.com/posts/1"
  );
  res.status(200).send(data);
});
