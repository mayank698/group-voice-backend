const Model = require("../models/podcastmodel");
const router = require("express").Router();

router.post("/add", (req, res) => {

  new Model(req.body).save()
    .then((data) => {
      console.log("podcast data saved");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id).populate('artist')
    .then((data) => {
      console.log("user data fetched");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((data) => {
      console.log("podcast deleted");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  Model.find({})
    .then((data) => {
      console.log("user data fetched");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyseries/:series", (req, res) => {
  Model.findOne(req.params.series)
    .then((data) => {
      console.log("user data fetched");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyauthor/:author", (req, res) => {
  Model.find({ artist: req.params.author })
    .then((data) => {
      console.log("user data fetched");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyGenre/:genre", (req, res) => {
  Model.findOne(req.params.jonar)
    .then((data) => {
      console.log("user data fetched");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});


module.exports = router;