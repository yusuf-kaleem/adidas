const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/product/',{ target: 'http://localhost:3001/' } ));
    app.use(createProxyMiddleware('/reviews/',{ target: 'http://localhost:3002/' } ));

}