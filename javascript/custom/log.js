(function(){
    var google = "https://script.google.com/macros/s/AKfycbz6oLGBd7N1rNmxcOzClQ0SWHyAd8z37bXTeAy9UkmMmj6MzD4/exec";
    var displayUrl = google + "?display=?";

    var outputDoing = function(jsonarray) {
        var i, output = [];
        for (i = 0; i < jsonarray.length; i++) {
            output.push('<div>');
            output.push(jsonarray[i]);
            output.push('<button class="done" type="button" style="font-size:18px;border:0;background:none;color:#268bd2;">DONE</button>');
            output.push('<br>');
            output.push('<textarea name="summary" rows="2" style="font-size:18px;"></textarea>');
            output.push('</div>');
        }
        var outputString = output.join("");
        return outputString;
    };

    var outputOptions = function(jsonarray) {
        var i, output = [];
        for (i = 0; i < jsonarray.length; i++) {
            output.push('<option value="');
            output.push(jsonarray[i]);
            output.push('">');
            output.push(jsonarray[i]);
            output.push('</option>');
        }
        var outputString = output.join("");
        return outputString;
    };

    var outputLocation = function(value) {
        return value;
    };

    $.getJSON(displayUrl).done(function(data) {
        var content = outputDoing(data.doing);
        if (content) {
            $('#doing').html('content');
        } else {
            $('#doing').html('无任务');
        }
        content = outputLocation(data.place);
        $('#place').html(content);
        content = outputOptions(data.recent);
        $("#recent").append(content);
    });

    $(document).on("click", '#submit', function(event){
        event.preventDefault();
        var command = [];
        command.push(google);
        command.push('?');
        command.push($('#form').serialize());
        command.push('&state=?');
        $('#send').html('<span style="color:green;">Sending...</span>');
        $.getJSON(command.join('')).done(function(data) {
            $('#send').html('<span style="color:red;">Done!</span>');
            location.reload();
        });
    });

    $(document).on("click", 'button.done', function(event){
        event.preventDefault();
        var textarea = $(this).parent().find("textarea");
        if (textarea.val()) {
            textarea.val('');
        } else {
            textarea.val('✓');
        }
        if (textarea.val()) {
            $(this).text('CLEAR');
        } else {
            $(this).text('DONE');
        }
    });

    $(document).on("blur keyup", 'textarea', function(){
        var button = $(this).parent().find('button.done');
        if ($(this).val()) {
            button.text('CLEAR');
        } else {
            button.text('DONE');
        }
    });

})();
