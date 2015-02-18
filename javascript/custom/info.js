(function() {
    var Url = "../../i/info.json?callback=?";
    var tag = "";
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
        var array = [], i;
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
        if (object.Notices) {
            array = object.Notices;
            output.push("<h2>注意事项</h2>");
            output.push('<ul>');
            for (i=0;i<array.length;i++) {
                output.push('<li><a href="show">' + array[i] + '</a></li>');
            }
            output.push('</ul>');
        }
        if (object.Names) {
            array = object.Names;
            output.push('<h2><a href="http://yuz.me/i/">←</a> ' + tag + '要注意：</h2>');
            output.push("<ul>");
            for (i=0;i<array.length;i++) {
                output.push('<li>' + array[i] + ' <a href="hide">(Hide)</a> <a href="dump">(Dump)</a></li>');
            }
            output.push("</ul>");
        }
        return output.join('');
    };

    // show text
    $(document).on("click", 'a[href="show"]', function( event ){
        event.preventDefault();
        tag = $(this).text();
        $(this).text("Loading...");
        var google = "https://script.google.com/macros/s/AKfycbyvHEYD-p-XQ8rlwzDIsamFMTnfus0inzm3IRsHNOZ37P3xYjkO/exec";
        var hideUrl = google + "?tag=" + tag + "&prefix=?";
        $.getJSON(hideUrl).done(function(data) {
            var content = createOutput(data);
            var idName = "info";
            document.getElementById(idName).innerHTML = content;
        });
    });

    // hide text
    $(document).on("click", 'a[href="hide"]', function( event ){
        event.preventDefault();
        var item = $(this).parent().slideUp();
    });

    // dump text
    $(document).on("click", 'a[href="dump"]', function( event ){
        event.preventDefault();
        var item = $(this).parent();
        var i = item.text().split(" (H");
        var sub = i[0];
        item.slideUp();
        var google = "https://script.google.com/macros/s/AKfycbyvHEYD-p-XQ8rlwzDIsamFMTnfus0inzm3IRsHNOZ37P3xYjkO/exec";
        var hideUrl = google + "?hide=" + sub + "&prefix=?";
        $.getJSON(hideUrl).done(function(data) {
        });
    });
})();
