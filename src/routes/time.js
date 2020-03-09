const express = require("express");
const router = express.Router();
const Timetable = require("../models/time");

router.post('/getTimetable', async (req, res) => {

    try {
        const timetable = await Timetable.find({email: req.body.email});
        return res.json({status: 'Success', message: timetable});
    } catch (error) {
        res.status(400).json({status: 'Error', message: error});
    }

});

router.post("/timein", async (req, res) => {
    
    try {
        const clockInfo = new Timetable({
            email: req.body.email,
            dayDate: req.body.dayDate,
            timeIn: req.body.timeIn,
            timeOut: req.body.timeOut
        });

        const savedClock = await clockInfo.save();
        res.json({status: 'Success', message: 'Punch In Sucessful!'});
    } catch (error) {
        res.status(400).send({status: 'Error', message: error});
    }

});

router.post('/timeout', async (req, res) => {
    console.log(req.body);

    try {
        const updated = await Timetable.findOneAndUpdate({dayDate: req.body.dayDate, email: req.body.email}, {timeOut: req.body.timeOut});
        res.json({status: 'Success', message: 'Punch Out Successful'});
    } catch (error) {
         return res.json({status: 'Error', message: error});
    }
});

router.post('/isTimeIn', async (req, res) => {
    
    try {
        
        const isTimeIn = await Timetable.findOne({
            dayDate: req.body.dayDate,
            email: req.body.email
        });

        console.log(req.body);
        console.log('istimein', isTimeIn);

        if (!isTimeIn) {
            return res.json({status: 'Success', message: 'No'});
        }

        return res.json({status: 'Success', message: 'Yes'});

    } catch (error) {
        res.json(error);
    }
});

router.post('/isTimeOut', async (req, res) => {

    try {
        const timeout = await Timetable.findOne({dayDate: req.body.dayDate, email: req.body.email});
        console.log('istimeout', timeout);
        if (timeout.timeOut) {
            return res.json({status: 'Success', message: 'Yes'});
        }

        res.json({status: 'Success', message: 'No'});
    } catch (error) {
        res.status(400).json({status: 'Error', message: error});
    }

});

module.exports = router;