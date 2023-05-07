const router = require("express").Router();

const adminRoute = require("./adminRoute");


router.use("/api/v1/admin", adminRoute);

module.exports = router;