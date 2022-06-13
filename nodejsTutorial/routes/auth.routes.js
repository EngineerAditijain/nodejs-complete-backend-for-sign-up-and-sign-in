const express = require('express');
const router = express.Router();
const { verifySignUp }  = require("../middlewares/verifySignUp")
const controller = require("../controllers/auth.controller");

  
  router.post(
    "/api/auth/signup",
    // [
    //   verifySignUp.checkDuplicateUsernameOrEmail,
    //   verifySignUp.checkRolesExisted
    // ],
    controller.signup
  );
  router.post("/api/auth/signin", controller.signin);

module.exports = router;