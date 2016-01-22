/**
 * @license %LICENSE%
 * @fileOverview %DESCRIPTION%
 * @author %AUTHOR%
 * @version %VERSION%
 */

console.log(Favico);

var previousUnreadCount = 0;
const favicon = new Favico({
    animation: 'none'
});

const initialize = () => {
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
    var unreadCount = window.global_unread;

    // Avoid unnecessary badge updates
    if (unreadCount === previousUnreadCount) {
        return;
    }

    if (unreadCount === undefined || unreadCount === null) {
        console.warn("favicon-unread-count: Seems like global_unread is not set?");
        unreadCount = 0;
    }

    if (unreadCount > 0) {
        favicon.badge(unreadCount);
    } else {
        favicon.badge(0);
    }
    console.log(unreadCount);
    previousUnreadCount = unreadCount;
};

initialize();
