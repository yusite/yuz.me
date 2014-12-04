(function() {
    var google = "https://script.google.com/macros/s/AKfycbwF_LDcgDr-Jpf7To9_tqE4lrG2VoluAlQCglrHExJ6fS4HfaQ/exec";
    var Url = google + "?prefix=?";

    $.getJSON(Url).done(function(data) {
        var content = createOutput(data);
        var idName = 'sublime';
        document.getElementById(idName).innerHTML = content;
    });

    var createOutput = function( jsonobject ) {
        var output = [];
        var i,n,m,t;
        for (i in jsonobject) {
            var i_object = jsonobject[i];
            var titleLength = i_object.title.length;
            output.push("<h3 id=\"" + i + "\">" + i + "</h3>");
            output.push("<table><tbody style=\"font-size:smaller;\">");
            output.push("<tr class=\"head\">");
            for (n = 0; n < titleLength; n++) {
                output.push("<td>" + i_object.title[n] + "</td>");
            }
            output.push("</tr>");
            for (n = 0; n < i_object.name.length; n++) {
                output.push("<tr>");
                for (m = 0; m < titleLength; m++) {
                    t = i_object.title[m].toLowerCase();
                    if (t === 'name') {
                        output.push("<td><a href=\"");
                        output.push(i_object.url[n]);
                        output.push("\" target=\"_blank\">" + i_object[t][n] + "</a></td>");
                    } else if (t === 'conf' && i_object[t][n] !== "") {
                        output.push("<td><a href=\"");
                        output.push(i_object.url_settings[n]);
                        output.push("\" target=\"_blank\">Link</a></td>");
                    } else {
                        output.push("<td>" + i_object[t][n] + "</td>");
                    }
                }
                output.push("</tr>");
            }
            output.push("</tbody></table>");
        }
        var outputString = output.join("");
        return outputString;
    };
})();
