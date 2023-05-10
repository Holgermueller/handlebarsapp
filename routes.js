const path = require("path");

module.exports = (app) => {
  app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/about"));
  });

  app.get();
};
