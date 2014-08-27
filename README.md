ics-generator
=============

Generates calendar files suitable for use with Google Calendar, iCal, Outlook, etc.

Requirements
------------

  * Node.js >= 0.10

Usage
-----

    npm install
    PORT=7033 npm start

Query Parameters
----------------

You can load the calendar at any route, for instance /calendar.ics.  The following query params are supported:

  * start: A javascript-formatted date that is the start date of the event, such as `2014/08/27 05:30:00`.  Required.
  * end: A javascript-formatted date that is when the event ends.  Will use the start date if not passed.
  * tz: Timezone of the event date in the format `America/New_York`.  Required.
  * summary: The event title.  Required.
  * description: A longer description of the event.
  * name: Name of the calendar to add the event to.  Leave blank to let the user choose.


