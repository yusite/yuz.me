(function() {
    var google = "https://script.google.com/macros/s/AKfycbyZqS-gRVGUdbUSraB8285RR3sCBgUR2cFXnHTYex-8jXosbXTt/exec";
    var Url = google + "?all&prefix=?";
    // output text
    $.getJSON(Url).done(function(data) {
        var content = createOutput(data);
        var idName = 'task';
        document.getElementById(idName).innerHTML = content;
    });
    var createOutput = function( data ) {
        var array = data.all;
        var i, output = [];
        output.push('<table>');
        output.push('<tr>');
        output.push('<th>任务</th>');
        output.push('<th>最后期限</th>');
        output.push('<th>完成</th>');
        output.push('</tr>');
        for (i=0;i<array.length;i++) {
            output.push('<tr id="' + i + '">');
            output.push('<td>' + array[i].Tasks + '</td>');
            output.push('<td>' + array[i].Deadline + '</td>');
            output.push('<td><a href="hide" class="' + i + '">X</a></td>');
            output.push('</tr>');
        }
        output.push('</table>');
        var outputString = output.join("");
        return outputString;
    };
    // hide text
    $(document).on("click", 'a[href="hide"]', function( event ){
        event.preventDefault();
        var id = $(this).attr("class");
        $("#" + id).hide();
        var name = $("#" + id + " td:first-child").text();
        var hideUrl = google + "?hide=" + name;
        $.getJSON(hideUrl);
    });
})();
