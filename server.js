var env = process.env.RACK_ENV;

var express = require('express')
  , compression = require('compression')
  , pantry = require('redpantry')
  , app = express();

pantry.configure({ shelfLife: (60 * 15) });

app.use(compression()); //gzip!

app.get("/menu_widgets/:resource", function(req, res, next){
  var url = 'https://www.beermenus.com/menu_widgets/' + req.params.resource
  res.setHeader('Access-Control-Allow-Origin', '*');

  pantry.fetch({ uri: url}, function (error, item, contentType) {
    res.send(item);
  });

})

app.use(function(req, res, next){ res.sendfile('./public/index.html'); })

var port = process.env.PORT || 8080;
app.listen(port);

console.log("listening on port " + port);
