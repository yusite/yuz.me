(function() {
    var google = "https://script.google.com/macros/s/AKfycbxTFXewV2hSdm4LyOCwQ6XAbjmGPtbCaijU-8Igk1VPmjyHMXs/exec";
    var Url = google + "?prefix=?";
    // add http
    function addhttp(url) {
        if (!/^(f|ht)tps?:\/\//i.test(url)) {
            url = "http://" + url;
        }
        return url;
    }
    // output text
    $.getJSON(Url).done(function(data) {
        var content = createOutput(data);
        var idName = 'share';
        document.getElementById(idName).innerHTML = content;
    });
    var createOutput = function( jsonarray ) {
        var output = [];
        var i,link;
        for (i = jsonarray.length - 1; i > -1; i--) {
            output.push('<div style="padding-top:0.5rem;" id="' + jsonarray[i].Id + '">');
            output.push("<span class=\"post-date\">");
            output.push(jsonarray[i].Time);
            output.push(' <a href="hide" style="float:right;font-size:smaller;">');
            output.push("Close");
            output.push("</a>");
            output.push("</span>");
            output.push(marked(jsonarray[i].Content));
            if (jsonarray[i].Link){
                link = addhttp(jsonarray[i].Link);
                output.push("<span><a href=\"" + link + "\">" + link + "</a></span>");
            }
            output.push("<hr>");
            output.push("</div>");
        }
        var outputString = output.join("");
        return outputString;
    };
    // hide text
    $(document).on("click", 'a[href="hide"]', function( event ){
        event.preventDefault();
        $(this).html("Closing...");
        var theDiv = $(this).parent().parent();
        var divID = theDiv.attr('id');
        var hideUrl = google + "?hide=" + divID;
        theDiv.slideUp();
        $.getJSON(hideUrl);
    });
})();
