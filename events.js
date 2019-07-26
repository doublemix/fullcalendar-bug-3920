const moment = require('moment');

function makeEvent (title, startTime) {
  return {
    title: title,
    start: startTime.toDate(),
    end: startTime.add(1, 'hour').toDate(),
  }
}

module.exports = (function generateEvents () {
  const now = moment();
  const weeks2Ago = moment().subtract(2, 'weeks');
  const weeks2FromNow = moment().add(2, 'weeks');
  return [
    makeEvent('2 weeks ago', weeks2Ago),
    makeEvent('now', now),
    makeEvent('2 weeks from now', weeks2FromNow),
  ]
});
