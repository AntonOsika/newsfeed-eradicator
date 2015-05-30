var divs = document.getElementsByTagName("div"), item;
var stream = 0, ticker = 0;
for (var i = 0, len = divs.length; i < len; i++) {
    if (ticker && stream) break;
    item = divs[i];
    if (item.id) {
        if (!ticker && item.id.match("pagelet_ticker") != null) { 
            item.remove();
            ticker = 1;
        }
        else if (!stream && item.id.match("topnews_main_stream") != null) {
            item.remove()
            stream = 1;
        }
    }
}

