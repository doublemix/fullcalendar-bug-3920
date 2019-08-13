# FullCalendar Bug #4975 Demonstration

A small working demo of how quickly navigating between different time ranges with an asynchronous event source
can cause incorrect behavior where no (or not all events) render.

## Recreating

In order to recreate this bug, we need an asynchronous event source, that responds slow enough for someone to navigate twice during one request.
Therefore, I setup a server that will respond with a (at least) two second delay.
Also note that events in the overlap period (visible from both time ranges) are not affected.
I used 3 events (today, 2 weeks ago, 2 weeks from now) to ensure that at least one event disappears.

## Heroku App

A demonstration of this bug is live on Heroku: [FullCalendar Bug #4975 Demonstration](https://doublemx2-fullcalendar-bug3920.herokuapp.com/). Follow instructions on home page to recreate the bug.

## Running locally

### Requirements

Requires NPM and Node. Runs a HTTP server on localhost port 3000

### Instructions

Clone this repo

    $ git clone https://github.com/doublemix/fullcalendar-bug-4975/

Install dependencies

    $ cd fullcalendar-bug-4975
    $ npm i

Start server

    $ npm start

Navigate to site at http://localhost:3000/, and follow instructions.