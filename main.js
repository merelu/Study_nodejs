var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  fs.readdir('./data', function(err, filelist){
    
  })

  console.log(url.parse(_url, true));
  if (pathname === '/') {
    if (queryData.id === undefined) {
      fs.readdir('./data', function(err, filelist){
        var title = 'Welcome';
        var description = 'Hello World';
        var template = `
        <!DOCTYPE html>
        <html>
    
        <head>
           <title>WEB1-${title}</title>
           <meta charset="utf-8">
           <link rel="stylesheet" href="style.css">
           <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
           <script src="color.js"></script>
        </head>
    
        <body>
           <h1><a href="/">WEB</a></h1>
            <input type="button" value="night" onclick="
                nightDayHandler(this);
            ">
            <div id="grid">
                <ul>
                    <li><a href="/?id=HTML">HTML</a></li>
                    <li><a href="/?id=CSS">CSS</a></li>
                    <li><a href="/?id=JavaScript">JavaScript</a></li>
                </ul>
    
               <div id="article">
                    <h2>${title}</h2>
                    <p>${description}</p>
                </div>
            </div>
    
        </body>
        </html>
         `;
        response.writeHead(200);
        response.end(template);
      });
  
    } else {
      fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
        var title = queryData.id;
        var template = `
        <!DOCTYPE html>
        <html>
  
        <head>
            <title>WEB1-${title}</title>
            <meta charset="utf-8">
            <link rel="stylesheet" href="style.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="color.js"></script>
        </head>
  
        <body>
          <h1><a href="/">WEB</a></h1>
            <input type="button" value="night" onclick="
                nightDayHandler(this);
            ">
            <div id="grid">
                <ul>
                    <li><a href="/?id=HTML">HTML</a></li>
                    <li><a href="/?id=CSS">CSS</a></li>
                    <li><a href="/?id=JavaScript">JavaScript</a></li>
                </ul>
  
              <div id="article">
                <h2>${title}</h2>
                <p>${description}</p>
              </div>
            </div>
  
        </body>
        </html>
        `;
        response.writeHead(200);
        response.end(template);
      });
    }
  } else {
    response.writeHead(200);
    response.end('Not found');
  }

});
app.listen(3000);