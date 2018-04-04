

var tryRemove = function () {
    var stream = false, ticker = false;
    if (! ( stream || ticker)) {
    var divs = document.getElementsByTagName("div"), item;

    for (var i = 0, len = divs.length; i < len; i++) {

        item = divs[i];
        if (item.id) {
            if (!ticker && item.id.match("pagelet_ticker") != null) { 
                item.remove();
                ticker = true;
            }
            else if (!stream && item.id.match("topnews_main_stream") != null) {
                item.remove()
                stream = true;
            }
        }
    }
}
}

if(window.location.host === 'www.facebook.com') {
    setInterval(tryRemove, 100);
}
