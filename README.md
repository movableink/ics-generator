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

  * _start_: A javascript-formatted date that is the start date of the event, such as `2014/08/27 05:30:00`.  Required.
  * _end_: A javascript-formatted date that is when the event ends.  Will use the start date if not passed.
  * _tz_: Timezone of the event date in the format `America/New_York`.  Required.
  * _summary_: The event title.  Required.
  * _description_: A longer description of the event.
  * _location_: Add Location (string)
  * _name_: Name of the calendar to add the event to.  Leave blank to let the user choose.
  * _rrule_: Logic for Recurrence Rule. If not passed, the event will not recur.
  * _all_day_: If this parameter is passed, the event returned will have its "All Day" checkbox filled in.

Example URL
-----------

    http://localhost:7033/calendar.ics?tz=America/New_York&start=2014/08/28%2003:00:00&end=2014/08/28%2005:30:00&summary=my%20event&description=this%20is%20an%20event.&location=Movable%20Ink

Example Reoccurring URL
-----------

    http://localhost:7033/calendar.ics?tz=America/New_York&start=2017/08/19%2003:00:00&end=2017/08/19%2005:30:00&summary=my%20event&description=this%20is%20an%20event.&location=Movable%20Ink&rrule=FREQ=MONTHLY;BYMONTHDAY=17

Example All Day URL
-----------
  
    http://localhost:7033/calendar.ics?tz=America/New_York&start=2014/08/28%2003:00:00&end=2014/08/28%2005:30:00&summary=my%20event&description=this%20is%20an%20event.&location=Movable%20Ink&all_day=1

License
-------

See LICENSE.
