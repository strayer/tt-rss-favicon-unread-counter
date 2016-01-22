#!/bin/sh
echo '(function() {' > build/tmp-favicon-unread-count.js
cat build/tmp-babel-favicon-unread-count.js >> build/tmp-favicon-unread-count.js
echo '})();' >> build/tmp-favicon-unread-count.js
