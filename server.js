var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var express = require('express');

var app = new (express)();
var port = process.env.PORT || (process.argv[2] || 3000);

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('dist'));

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/v1/user*', function(res, res){
    res.json({msg: '', code: 0, res: {'name': 'jerry', age: 26}})
})


app.get('/v1/post/*', function(res, res){
    res.json({msg: 'server bug, need repair', code: 1, res: null})
})

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
