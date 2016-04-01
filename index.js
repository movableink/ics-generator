var http = require('http');
var url = require('url');
var fs = require('fs');
var underscore = require('underscore');

var template = underscore.template(fs.readFileSync('./ics.template').toString());

var port = process.env['PORT'] || 7033;
var host = process.env['HOST'] || 'ics.movableink-dmz.com';

http.createServer(function(req, res) {
  var params = url.parse(req.url, true).query;

  var options = {
    timezone: params.tz,
    summary: params.summary,
    description: params.description,
    name: params.name
  };

  options.startDate = formatDate(new Date(params.start));
  options.endDate = params.end ? formatDate(new Date(params.end)) : options.startDate;
  options.uid = (new Date()).getTime() + "@" + host;
  options.now = formatDate(new Date());

  var output = template(options);

  res.writeHead(200, {'Content-Type': 'text/calendar'});
  res.end(output);
}).listen(process.env['PORT']);

console.log("Listening on port " + port + ", host " + host);

function formatDate(d) {
  return d.getFullYear() + pad2(d.getMonth() + 1) + pad2(d.getDate()) + "T" + pad2(d.getHours()) + pad2(d.getMinutes()) + pad2(d.getSeconds());
}

function pad2(i) {
  if(i < 10) {
    return "0" + i;
  } else {
    return "" + i;
  }
}
