const Model = require("../models/audioModel");
const router = require("express").Router();

router.post("/add", (req, res) => {

    new Model(req.body).save()
        .then((data) => {
            console.log("audio data saved");
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
});

router.get("/getbyuser/:id", (req, res) => {
    Model.find({ artist: req.params.id })
        .then((data) => {
            console.log("audio data fetched");
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
});

router.get("/getall", (req, res) => {
    Model.find({}).populate('artist')
        .then((data) => {
            console.log("audio data fetched");
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
});


module.exports = router;