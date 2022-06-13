const express = require('express');
const router = express.Router({mergeParams: true});
const mysqlConnection = require('../database');
const verify = require("../verifyToken");



router.post("/update", verify, (req, res) => {
    mysqlConnection.query(
        "UPDATE employee set Name = ?,EmpCode = ?, Salary = ? WHERE EMPID= ?",
        [req.body.Name, req.body.EmpCode, req.body.Salary, req.params.id], (err, rows, fields) => {
            !err ? res.redirect("/view") : console.log(err);
        }
    );
});


router.get("/delete", verify, (req, res) => {
    mysqlConnection.query(
        "DELETE FROM employee WHERE EmpID = ?", [req.params.id], (err, rows, fields) => {
            !err ? res.redirect("/view") : console.log(err);
        }
    );
});

module.exports = router;