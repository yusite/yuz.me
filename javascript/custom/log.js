(function() {
    var google = "https://script.google.com/macros/s/AKfycbxRYZQtTQ3qBQtxU5Q1iMV9_hlgvgALyTyID42IUNfDouFsajfN/exec";
    var displayUrl = google + "?display=?";
    // output text
    $.getJSON(displayUrl).done(function(data) {
        var content = createDoing(data.doing);
        var idName = 'log';
        document.getElementById(idName).innerHTML = content;
        content = createSelect(data.recent);
        idName = 'recent';
        document.getElementById(idName).innerHTML = content;
        content = createSelect(data.todo);
        idName = 'todo';
        document.getElementById(idName).innerHTML = content;
        content = outputLocation(data.place);
        idName = 'place';
        document.getElementById(idName).innerHTML = content;
    });
    // create doing output
    var createDoing = function( jsonarray ) {
        var i, output = [];
        for (i = 0; i < jsonarray.length; i++) {
            output.push('<li><input type="checkbox" name="preserve" value="');
            output.push(jsonarray[i]);
            output.push('" id="');
            output.push(i);
            output.push('">');
            output.push(' <label for="');
            output.push(i);
            output.push('">');
            output.push(jsonarray[i]);
            output.push('</label>');
            output.push('</li>');
        }
        var outputString = output.join("");
        return outputString;
    };
    // create recent output
    var createSelect = function( jsonarray ) {
        var i, output = [];
        output.push('<select name="create" style="font-size:16px;width:170px;">');
        output.push('<option selected value="">请选择</option>');
        for (i = 0; i < jsonarray.length; i++) {
            output.push('<option value="');
            output.push(jsonarray[i]);
            output.push('">');
            output.push(jsonarray[i]);
            output.push('</option>');
        }
        output.push('</select>');
        var outputString = output.join("");
        return outputString;
    };
    // create location output
    var outputLocation = function( jsonarray ) {
        return jsonarray[0];
    };
    // validate Form
    $("#submit").on("click", function(event) {
        var items = $("form").serialize().split(/=|&/);
        var count, creates = [], categories = [];
        for (count = 0; count < items.length; count = count + 2) {
            var id = count + 1;
            if (items[count] == 'create') {
                creates.push(items[id]);
            } else if (items[count] == 'category') {
                categories.push(items[id]);
            }
        }
        var create = creates.join("");
        var category = categories.join("");

        if (create && !category) {
            $("span#test").text("Please select your category!").show().fadeOut(2000);
            return false;
        } else {
            return true;
        }
    });
})();
