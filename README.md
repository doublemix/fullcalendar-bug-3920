# FullCalendar Bug #3920 Demonstration

A small working demo of how quickly navigating between different time ranges with an asynchronous event source
can cause incorrect behavior where no (or not all events) render.

## Notes

In order to recreate this bug, we need an asynchronous source, that responds slow enough for someone to navigate twice during one request.
Therefore, I set-up a server that will respond with a (at least) two second delay.
Also note that events in the overlap period (visible from both months) are not affected.
I used 3 events (today, 2 weeks ago, 2 weeks from now) to ensure that at least one event disappears.

### What I assume is happening

When navigating to the next month, a request fires off for it's events.
Then, when we navigate back, since the previous month's events are still loaded, it just shows them, without firing an event or cancelling next month request.
When next month's events come in it replaces this month's events, so they stop rendering.
And none of the next month's are in range so they stop rendering (except for those in the overlap).

## Requirements

Requires NPM and Node. Runs a HTTP server on localhost port 3000

## Instructions

Clone this repo

    $ git clone https://github.com/doublemix/fullcalendar-bug-3920/

Install dependencies

    $ cd fullcalendar-bug-3920
    $ npm i

Start server

    $ npm start

Navigate to site at http://localhost:3000/, and follow instructions.