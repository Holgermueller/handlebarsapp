const express = require("express");
const { engine } = require("express-handlebars");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const { registerPartial } = require("handlebars");
const path = require("path");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express();

app.use(connectLiveReload());

const port = 3000;

app.engine(
  "hbs",
  engine({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("main", { layout: "index" });
});

app.get("/about", (req, res) => {
  res.render("about", { layout: "about" });
});

app.listen(port, () => console.log(`App listening on port ${port} you all`));
