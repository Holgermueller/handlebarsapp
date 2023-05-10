const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

const port = 3000;

app.engine("hbs", engine());
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main", { layout: "index" });
});

app.listen(port, () => console.log(`App listening on port ${port}`));