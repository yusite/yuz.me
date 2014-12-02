(function() {
    var google = "https://script.google.com/macros/s/AKfycbxTFXewV2hSdm4LyOCwQ6XAbjmGPtbCaijU-8Igk1VPmjyHMXs/exec";
    var Url = google + "?prefix=?";

    $.getJSON(Url).done(function(data) {
        var content = createOutput(data);
        var idName = 'share';
        document.getElementById(idName).innerHTML = content;
    });

    var createOutput = function( jsonarray ) {
        var output = [];
        var array = jsonarray.reverse();
        var i;
        for (i = 0; i < array.length; i++) {
            output.push("<span class=\"post-date\">" + array[i].Time + "</span>");
            output.push("<p>" + array[i].Content +"</p>");
            output.push("<hr>");
        }
        var outputString = output.join("");
        return outputString;
    };
})();
