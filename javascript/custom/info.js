(function() {
    var google = "https://script.google.com/macros/s/AKfycbx9NTBoP4gRf9jmnb89UV5XFVBckW9VwOcLvu-wpCSkdeWKUpY/exec?";
    var option = "forms&";
    var prefix = "prefix=?";
    var Url = google + option + prefix;
    // output text
    $.getJSON(Url).done(function(data) {
        var content = createOutput(data);
        var idName = 'info';
        document.getElementById(idName).innerHTML = content;
    });
    var createOutput = function( object ) {
        var output = [];
        if (object.Forms) {
            var array = object.Forms;
            output.push('<h1>Forms</h1>');
            output.push('<ul>');
            var i;
            for (i=0;i<array.length;i++) {
                output.push('<li><a href="' + array[i].published + '">' + array[i].name + '</a></li>');
            }
            output.push('</ul>');
        }
        return output.join('');
    };
})();
