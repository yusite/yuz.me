(function(){
    var google = "https://script.google.com/macros/s/AKfycbz6oLGBd7N1rNmxcOzClQ0SWHyAd8z37bXTeAy9UkmMmj6MzD4/exec";
    var displayUrl = google + "?oldlist=?";

    function outputRecords(dataArray) {
        var i, output = [];
        for (i = 0; i < dataArray.length; i++) {
            var task = dataArray[i];
            output.push('<div>');
            output.push('<input type="text" name="rid" value="');
            output.push(task.Rid);
            output.push('" style="font-size:16px;width:35px;" readonly> ');
            output.push(task.Name + ' ' + task.End);
            output.push('<br>');
            output.push('<textarea name="summary" rows="2" style="font-size:16px;margin-top:5px;">');
            output.push(task.Summary);
            output.push('</textarea>');
            output.push('</div>');
            output.push('<hr>');
        }
        return output.join("");
    }

    $.getJSON(displayUrl).done(function(data) {
        var content = outputRecords(data.records);
        var idName = 'update';
        document.getElementById(idName).innerHTML = content;
    });

    $(document).on("click", '#submit', function(event){
        event.preventDefault();
        var command = [];
        command.push(google);
        command.push('?');
        command.push($('#form').serialize());
        command.push('&reedit=?');
        $('#send').html('<span style="color:green;">Sending...</span>');
        $.getJSON(command.join('')).done(function(data) {
            $('#send').html('<span style="color:red;">Done!</span>');
            location.reload();
        });
    });

})();
