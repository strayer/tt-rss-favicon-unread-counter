/**
 * @license %LICENSE%
 * @fileOverview %DESCRIPTION%
 * @author %AUTHOR%
 * @version %VERSION%
 */

let previousUnreadCount = 0;
const favicon = new Favico({
    animation: "none"
});

const log = (msg) => {
    if (console && console.log) {
        console.log(msg);
    }
};

const warn = (msg) => {
    if (console && console.warn) {
        console.warn(msg);
    }
};

const initialize = () => {
    //noinspection JSUnresolvedVariable
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

    if (!MutationObserver) {
        log("favicon-unread-counter: MutationObserver not supported in browser, plugin disabled...");
        return;
    }

    const title = document.querySelector("head > title");

    // Remove one of the two favicons since favico.js gets confused by them
    document.querySelector("link[rel='shortcut icon']").remove();

    const observer = new MutationObserver(function() {
        updateBadge();
    });
    observer.observe(title, {childList: true});

    // First time update in case the script is run late
    updateBadge();
};

const updateBadge = () => {
    // window.global_unread is set by TT-RSS
    let unreadCount = window.global_unread;

    // Avoid unnecessary badge updates
    if (unreadCount === previousUnreadCount) {
        return;
    }

    if (unreadCount === undefined || unreadCount === null) {
        warn("favicon-unread-count: Seems like global_unread is not set?");
        unreadCount = 0;
    }

    if (unreadCount > 0) {
        favicon.badge(unreadCount);
    } else {
        favicon.badge(0);
    }

    previousUnreadCount = unreadCount;
};

initialize();
