const { authJwt } = require("../middlewares");
const controller = require("../controllers/table.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/table/all",
    [authJwt.verifyToken],
    controller.allAccess
  );

app.post(
    "/api/table/add",
    [authJwt.verifyToken],
    controller.addTable
);

app.get(
    "/api/table/:id",
    [authJwt.verifyToken],
    controller.getTable
);
};