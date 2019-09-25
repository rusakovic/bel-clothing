const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


// we are in production or testing to use Dotenv
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); 

// express is just a libraty that allows us to build an API server easily
const app = express();

// When we deploy to Heroku, it sets up the process PORT for us
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// convert url to Standard url (without spaces, symbols)
app.use(bodyParser.urlencoded({ extended: true }))

//allows to make request from port 3000 to port 5000
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  // to serve all static files in build
  app.use(express.static(path.join(__dirname, 'client/build')));

  // if the user ruquires any file the server sends it HTML, CSS, JS
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}


app.listen(port, error => {
  if(error) throw error;
  console.log('Server running on port ' + port);
});


// ROUTE to make the payment
app.post('/payment', (req, res) => {
  // from the client side
  const body ={
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  // we take the body info from client side and send to Stripe to check the payment
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      // if payment with error - send back the error, else => success response stripeRes
      res.status(500).send({ error: stripeErr })
    } else {
      res.status(200).send({ success: stripeRes})
    }
  })

})