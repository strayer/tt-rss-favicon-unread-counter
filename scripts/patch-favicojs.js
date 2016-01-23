var replace = require('replace');

// Horrible horrible hack to avoid problems with TT-RSS' AMD system
replace({
    paths: ["build/favicon-unread-counter.js"],
    silent: true,
    regex: "typeof define !== 'undefined' && define.amd",
    replacement: "false"
});
replace({
    paths: ["build/favicon-unread-counter.js"],
    silent: true,
    regex: "typeof module !== 'undefined' && module.exports",
    replacement: "false"
});
