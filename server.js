const fs = require('fs');
const express = require('express');

const app = express();

const generateEvents = require('./events');

app.get('/', (req, res) => {
  res.contentType('html').send(fs.readFileSync('index.html'));
});
app.get('/get-events', (req, res) => {
  const { start, end } = req.query;
  const startMs = new Date(start).getTime();
  const endMs = new Date(end).getTime();
  const events = generateEvents().filter(function (event) {
    const eventStartMs = event.start.getTime();
    const eventEndMs = event.end.getTime();
    return eventStartMs < endMs && startMs < eventEndMs;
  })
  setTimeout(() => {
    res.json(events);
  }, 2000);
});
app.listen(3000, () => {
  console.log('server running at http://localhost:3000/');
});
