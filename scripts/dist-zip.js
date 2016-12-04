var file_system = require("fs");
var archiver = require("archiver");

var output = file_system.createWriteStream("build/dist-" + process.env.npm_package_version + ".zip");
var archive = archiver.create("zip", {});
archive.pipe(output);

//archive.directory("build", "favicon_unread_counter");
archive.file("build/favicon-unread-counter.min.js", {
    "name": "favicon_unread_counter/favicon-unread-counter.min.js"
});
archive.file("build/init.php", {
    "name": "favicon_unread_counter/init.php"
});
archive.finalize();
