(function() {
    var google = "https://script.google.com/macros/s/AKfycbxTFXewV2hSdm4LyOCwQ6XAbjmGPtbCaijU-8Igk1VPmjyHMXs/exec";
    var Url = google + "?prefix=?";

    $.getJSON(Url).done(function(data) {
        var content = createOutput(data);
        var idName = 'share';
        document.getElementById(idName).innerHTML = content;
    });

    function addhttp(url) {
        if (!/^(f|ht)tps?:\/\//i.test(url)) {
            url = "http://" + url;
        }
        return url;
    }

    var createOutput = function( jsonarray ) {
        var output = [];
        var array = jsonarray.reverse();
        var i,l;
        for (i = 0; i < array.length; i++) {
            output.push("<div id=\"share-" + i + "\">");
            output.push("<span class=\"post-date\">" + array[i].Time + "</span>");
            output.push(marked(array[i].Content));
            if (array[i].Link){
                l = addhttp(array[i].Link);
                output.push("<span><a href=\"" + l + "\">" + l + "</a></span>");
            }
            output.push("</div>");
            output.push("<hr>");
        }
        var outputString = output.join("");
        return outputString;
    };
})();
