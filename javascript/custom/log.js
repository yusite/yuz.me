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
        output.push('<form action="');
        output.push(google);
        output.push('" method="GET">');
        // input locations
        output.push('<p>请选择所在位置：');
        output.push('<input type="radio" name="location" value="Torino" checked>都灵');
        output.push(' ');
        output.push('<input type="radio" name="location" value="Beijing">北京');
        output.push('</p>');
        // select a task
        output.push('<p>选择完成的任务：');
        for (i = 0; i < jsonarray.length; i++) {
            output.push('<input type="radio" name="finish" value="');
            output.push(jsonarray[i]);
            output.push('">');
            output.push(jsonarray[i]);
            output.push(' ');
        }
        output.push('<input type="radio" name="finish" value="">取消');
        output.push('</p>');
        // create a new task
        output.push('<p>或者创建新任务：');
        output.push('<input type="text" name="create">');
        output.push('</p>');
        // submit
        output.push('<input type="submit" value="Submit">');
        output.push('</form>');
        var outputString = output.join("");
        return outputString;
    };
})();
