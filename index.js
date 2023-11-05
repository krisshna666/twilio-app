const express = require("express");
const { MessagingResponse } = require("twilio").twiml;

const app = express();
const port = process.env.PORT || 3000;
console.log("file initialized");
app.post("/incoming", (req, res) => {
  const twiml = new MessagingResponse();

  // Access the incoming message body
  const messageBody = req.body.Body;

  // Process the incoming message as needed
  // You can use `messageBody` to decide how to respond

  // Respond to the incoming message
  twiml.message("Thank you for your message!");

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});
