
var tryRemove = function () {
    document.querySelectorAll('div[id*=pagelet_ticker]').forEach(function(item) {
        item.remove()
    });
    document.querySelectorAll('div[id*=topnews_main_stream]').forEach(function(item) {
        item.remove()
    });
}

if(window.location.host === 'www.facebook.com') {
    setInterval(tryRemove, 100);
}
