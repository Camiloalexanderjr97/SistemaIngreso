const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.redirect('/links/Login');
});

// router.get("/Login", (req, res) => {
//     res.render("links/Login");
//   });
module.exports = router;