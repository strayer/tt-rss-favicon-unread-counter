<?php

class Favicon_Unread_Count extends Plugin {
    function about() {
        return array(
            floatval('%PHP_VERSION%'),
            '%DESCRIPTION%',
            'strayer' /* no complete author here because it fucks up the settings layout */
        );
    }

    function get_js() {
        return file_get_contents(__DIR__ . "/favicon-unread-count.min.js");
    }

    function api_version() {
        return 2;
    }
}
