const express = require("express");
const app = express();
const stripe_sk = require('./config').stripe_sk;
const port = require("./config").port;


const userRouter = require("./routers/userManager");
const podcastRouter = require("./routers/podcastmanager");
const utilRouter = require("./routers/utils");
const seriesRouter = require("./routers/seriesmanager");
const audioRouter = require("./routers/audioManager");
const reviewRouter = require("./routers/reviewManager");

const cors = require("cors");
const stripe = require("stripe")(stripe_sk);
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use("/user", userRouter);
app.use("/podcast", podcastRouter);
app.use("/series", seriesRouter);
app.use("/util", utilRouter);
app.use("/audio", audioRouter);
app.use("/review", reviewRouter);

app.use(express.static('./uploads/'));

app.post("/payment", (req, res) => {
  const { product, token } = req.body;
  console.log("product", product);
  return stripe.customers.create({
    email: token.email,
    source: token.id
  }).then(result =>
    res.status(200).json(result)
      .catch(err => console.log(err))
  )
})

app.post("/create-payment-intent", async (req, res) => {
  const data = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: data.amount,
    currency: 'inr'
  });
  res.status(200).json(paymentIntent);
});


app.get("/home", (req, res) => {
  res.send("Welcome Home");
});

app.listen(port, () => {
  console.log("server started at port 5000");
});
