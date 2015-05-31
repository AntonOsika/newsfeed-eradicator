
var startLoop = function() {
    var stream = false, ticker = false;

    var tryRemove = function () {
        console.log("remove called");
        var divs = document.getElementsByTagName("div"), item;
        for (var i = 0, len = divs.length; i < len; i++) {

            // If finished, 
            if (ticker && stream) {
                try {
                    f = document.getElementById("u_0_f").children[0];
                    home = document.getElementById("u_0_g").children[1];

                    f.addEventListener("click", function () {console.log("hej")});
                    home.addEventListener("click", startLoop);
                    return;
                }
                catch (err) {
                    window.setTimeout(tryRemove, 100);
                    console.log("Setting timer because failure.");
                    return;
                }
            }

            item = divs[i];
            try {
                if (!ticker && item.id.match("pagelet_ticker") != null) { 
                    item.remove();
                    ticker = true;
                    console.log("ticker removed");
                }
                else if (!stream && item.id.match("topnews_main_stream") != null) {
                    item.remove()
                    stream = true;
                    console.log("stream " + stream);
                }
            }
            catch (err) {}
        }

        if (!(stream && sticker)) {
            window.setTimeout(tryRemove, 100);
            //console.log("Setting timer as usual");
        }
    }
    window.setTimeout(tryRemove, 100);

}

startLoop();
