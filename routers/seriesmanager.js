const Model = require("../models/series");
const router = require("express").Router();

router.post("/addseries", (req, res) => {
  new Model(req.body).save()
    .then((data) => {
      console.log("user data added");
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
      console.log("user data fetched");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id).populate('artist').populate('podcasts').populate({ path: 'reviews', populate: { path: 'user' } })
    .then((data) => {
      console.log("series data fetched");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.put('/addreview/:id', (req, res) => {

  let data = req.body;

  Model.findByIdAndUpdate(req.params.id, { $push: data })
    .then(data => {
      console.log('series data updated');
      res.status(200).json(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    })
})

router.get("/getbyseries/:series", (req, res) => {
  Model.find(req.params.series)
    .then((data) => {
      console.log("series data fetched");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyauthor/:author", (req, res) => {
  Model.find(req.params.author)
    .then((data) => {
      console.log("author data fetched");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;