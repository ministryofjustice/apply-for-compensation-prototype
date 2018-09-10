module.exports = function (router) {

  var fs = require('fs');

  router.get('/file-list', function(req, res) {

    var markup = function(files, callback) {

      var items = [];
      for (i = 0; i < files.length; i++) {
        var q = files[i];
        q = q.slice(0, -5);
        var markup = '<li>' + '<a href="' + q + '">' + q + '</a>' + '</li>';
        items.push(markup);
      };
      callback(items);
    };

    var getFiles = function(callback) {
      fs.readdir(__dirname + '/views', function (err, files) { // '/' denotes the root folder
        if (err) throw err;
        markup(files, callback)
      });
    };

    getFiles(function(items){

      // render markup for items
      res.render('file-list', { 'files' : items });
    });
  });
}
