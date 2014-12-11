(function() {
    var google = "https://script.google.com/macros/s/AKfycbxRYZQtTQ3qBQtxU5Q1iMV9_hlgvgALyTyID42IUNfDouFsajfN/exec";
    var displayUrl = google + "?display=?";
    // output text
    $.getJSON(displayUrl).done(function(data) {
        var content = createOutput(data);
        var idName = 'log';
        document.getElementById(idName).innerHTML = content;
    });
    // create output
    var createOutput = function( jsonarray ) {
        var i, output = [];
        for (i = 0; i < jsonarray.length; i++) {
            output.push('<input type="checkbox" name="finish" value="');
            output.push(jsonarray[i]);
            output.push('" id="');
            output.push(i);
            output.push('">');
            output.push(' <label for="');
            output.push(i);
            output.push('">');
            output.push(jsonarray[i]);
            output.push('</label>');
            output.push(' ');
        }
        var outputString = output.join("");
        return outputString;
    };
})();
