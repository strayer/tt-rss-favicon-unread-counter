var replace = require("replace");

var options = {
    paths: ["build/favicon-unread-counter.js", "build/init.php"],
    silent: true
};

var phpVersion = process.env.npm_package_version.split(/\./, 2).join(".");

var replacements = {
    "%LICENSE%": process.env.npm_package_license,
    "%DESCRIPTION%": process.env.npm_package_description,
    "%AUTHOR%": process.env.npm_package_author_name + " <" + process.env.npm_package_author_email + ">",
    "%VERSION%": process.env.npm_package_version,
    "%PHP_VERSION%": phpVersion
};

var i;
for (i in replacements) {
    if (!replacements.hasOwnProperty(i)) {
        continue;
    }

    var key = i;
    var value = replacements[i];

    replace(Object.assign({
        regex: key,
        replacement: value
    }, options));
}
