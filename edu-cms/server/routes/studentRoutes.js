const express = require('express');
const router = express.Router();
const mdb = require('../utils/mongoConnect');
const dbConfig = require('../utils/databaseConfig')
const Student = require('../models/studentModel')

router.get('/findAllStudents', async (req, res) => {
    /*try {
        await mdb.connect(dbConfig.dbs.testDatabase)
        const result = await Student.model.find();
        res.json(result);
    } catch (err) {
        res.status(500).send({
            status_code: 500,
            message: "An error has happend while trying to connect to mongodb using the connect function. See mongoConnect.js for thye function deleration..."
        })
    } finally {
        await mdb.disconnect();
    }*/

    await mdb.connect(dbConfig.dbs.testDatabase)
    const result = await Student.model.find();
    
    if (result) {
        res.json(result);
        await mdb.disconnect();
    } else {
        console.error("no results returned...")
    }
    

})

router.get('/createStudent', async (req, res) => {
    
    const newStudent = new Student.model({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        emergencyContact: {
            name: req.body.emergencyContact.name,
            contactNumber: req.body.emergencyContact.contactNumber,
        },
        accounts: {
            payments: [req.body.accounts.payments[0]]
        }
    })

    let result;

    try {
        result = await mdb.client.db("test_database").collection("students").insertOne(newStudent);
    } catch (err) {
        res.status(500).send();
        console.error(err);
    } finally {
        if (result) {
            res.status(201).send({
                status_code: 201,
                result: "New user created"
            });
        } else {
            res.status(400).send({
                status_code: 400,
                result: "User not created"
            });
    
        };
    }

})

router.post('/findAndUpdate', async (req, res) => {

    console.log(req.body)

    let updateUser = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email
    }

    try {
        result = await mdb.client.db("test_database").collection("sample_users").findOne({ _id: "61543eb577b970c939bec4de" }, { $set: updateUser });
    } catch (err) {
        res.status(500).send();
        console.error(err);
    } finally {
        if (result) {
            res.status(202).send({
                status_code: 201,
                result: "User Updated"
            });
        } else {
            res.status(400).send({
                status_code: 400,
                result: "User not created"
            });
    
        };
    }

})

module.exports = router;