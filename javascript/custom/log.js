(function(){
    var google = "https://script.google.com/macros/s/AKfycbz6oLGBd7N1rNmxcOzClQ0SWHyAd8z37bXTeAy9UkmMmj6MzD4/exec";
    var displayUrl = google + "?display=?";

    var outputDoing = function( jsonarray ) {
        var i, output = [];
        for (i = 0; i < jsonarray.length; i++) {
            output.push(jsonarray[i]);
            output.push('<br>');
            output.push('<textarea name="summary" rows="1" style="font-size:16px;"></textarea>');
            output.push('<br>');
        }
        var outputString = output.join("");
        return outputString;
    };

    var outputSelect = function( jsonarray, name, option ) {
        var i, output = [];
        output.push('<option selected value="">');
        output.push(option);
        output.push('</option>');
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

    var outputLocation = function( value ) {
        return value;
    };

    $.getJSON(displayUrl).done(function(data) {
        var content = outputDoing(data.doing);
        var idName = 'log';
        document.getElementById(idName).innerHTML = content;
        content = outputLocation(data.place);
        idName = 'place';
        document.getElementById(idName).innerHTML = content;
        content = outputSelect(data.recent, 'create', 'Recent Tasks');
        idName = 'recent';
        document.getElementById(idName).innerHTML = content;
    });

    $(document).on("click", '#submit', function(event){
        event.preventDefault();
        var command = [];
        command.push(google);
        command.push('?');
        command.push($('#form').serialize());
        command.push('&state=?');
        $('#send').html('Done!');
        $.getJSON(command.join('')).done(function(data) {
            location.reload();
        });
    });

})();
