"use strict"
const webpackDevServer = require('./webpack-dev-server');
const app = require('koa')();
const bodyParser = require('koa-bodyparser');
const config = require('../config').database;
const mysql = require('mysql');
const wrapper = require('co-mysql');
const route = require('koa-route');
const connection = mysql.createConnection(config);

connection.connect(err => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection to database established');
});

const db = wrapper (connection);

app.use(bodyParser());

app.use(function *(next) {
  try {
    yield next;
  } catch (err) {
    this.status = err.status || 500;
    this.body = err.message;
    this.app.emit('error', err, this);
  }
});

app.use(route.get('/getCategories', function *() {
  this.body = yield db.query('SELECT * from categories');
}));

app.use(route.get('*', function *(){
  this.body = `<!DOCTYPE html>
                <html>
                  <head>
                    <meta charSet="utf-8" />
                  </head>
                  <body>
                    <div id="app-wrapper"></div>
                    <script type="text/javascript" src="http://localhost:3001/static/bundle.js"></script>
                  </body>
                </html>`
}));

app.on('error', function(err, ctx){
  log.error('server error', err, ctx);
});

webpackDevServer.listen(3000);
app.listen(3000);
