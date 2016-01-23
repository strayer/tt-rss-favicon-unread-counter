#!/bin/sh
echo '(function() {' > build/tmp-favicon-unread-counter.js
cat build/tmp-babel-favicon-unread-counter.js >> build/tmp-favicon-unread-counter.js
echo '})();' >> build/tmp-favicon-unread-counter.js
