const path = require('path');
module.exports = function (router) {

    var fs = require('fs');

    router.get('/file-list', function (req, res) {
        let filesList;

        // List all files in a directory recursively.
        var walkSync = function (dir, filelist) {
            var fs = fs || require('fs'),
                files = fs.readdirSync(dir);
            filelist = filelist || [];
            files.forEach(function (file) {
                if (fs.statSync(path.join(dir, file)).isDirectory()) {
                    filelist = walkSync(path.join(dir, file), filelist);
                }
                else {
                    filelist.push(path.join(dir, file));
                }
            });
            return filelist;
        };

        function markup(filePaths) {
            let htmlList = [];

            filePaths.forEach(filePath => {
                const newPath = filePath.substring(filePath.indexOf('views') + 5).replace(/\\/g, '/');
                newPath.replace('/index.html', '');
                const markup = '<li>' + '<a href="' + newPath + '">' + newPath + '</a>' + '</li>';
                htmlList.push(markup);
            });

            return htmlList
        };

        var getFilesList = function (callback) {
            filesList = walkSync(path.join(__dirname, '/views/'), []);
            filesList = filesList.filter(filePath => filePath.endsWith('.html'));
            callback && callback(filesList);
        };

        getFilesList(function (files) {
            // render markup for items
            res.render('file-list', { 'files': markup(files) });
        });
    });
}
