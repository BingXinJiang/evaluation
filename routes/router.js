/**
 * Created by jiangsong on 2017/9/13.
 */

var weixin = require('./weixin/index');

module.exports = function (app) {
    app.use('/', weixin);
}