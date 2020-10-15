var http = require('http')

http.createServer (function(request, response)
{
    response.write('hello');
    response.end();
}).listen(8080);