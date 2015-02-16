(function() {
/*  var google = "https://script.google.com/macros/s/AKfycbx9NTBoP4gRf9jmnb89UV5XFVBckW9VwOcLvu-wpCSkdeWKUpY/exec?";
    var option = "forms&sheets";
    var prefix = "&prefix=?";
    var Url = google + option + prefix; */

    var Url = "../../i/info.json?callback=?";

    $.ajax({
        type: "GET",
        url: Url,
        jsonpCallback: "output",
        contentType: "application/json",
        dataType: 'jsonp',
    }).done(function(data) {
        var content = createOutput(data);
        var idName = 'info';
        document.getElementById(idName).innerHTML = content;
    });

    var createOutput = function( object ) {
        var output = [];
        var array=[], i;
        if (object.Forms) {
            array = object.Forms;
            output.push('<h2>添加</h2>');
            output.push('<ul>');
            for (i=0;i<array.length;i++) {
                output.push('<li><a href="' + array[i].published + '">' + array[i].name + '</a></li>');
            }
            output.push('</ul>');
        }
        if (object.Sheets) {
            array = object.Sheets;
            output.push('<h2>显示</h2>');
            output.push('<ul>');
            for (i=0;i<array.length;i++) {
                output.push('<li><a href="' + array[i].published + '">' + array[i].name + '</a></li>');
            }
            output.push('</ul>');
        }
        return output.join('');
    };
})();
